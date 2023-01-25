/* eslint-disable @typescript-eslint/no-var-requires */
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { uuid } from 'uuidv4';

@Injectable()
export class DbService {
  private WatchLists;
  constructor() {
    const dbLocal = require('db-local');
    const { Schema } = new dbLocal({ path: './databases' });
    this.WatchLists = Schema('list', {
      _id: { type: String, required: true },
      symbol: { type: Array, default: [] },
      name: { type: String, default: 'Customer' },
    });
  }

  async find(key: string) {
    const reqWList = this.WatchLists.find((obj: any) => {
      obj.name === key;
    });
    return reqWList;
  }

  async readAll() {
    const reqWList = this.WatchLists.find();
    return reqWList;
  }

  async create(name: string, data: Array<string>) {
    console.log(name);
    const res = this.WatchLists.create({
      _id: uuid(),
      tokens: data,
      name: name,
    }).save();
    return res;
  }

  async update(key: string, name: string, token: string) {
    //const reqWList = this.WatchLists.find((obj: any) => {
    //  obj._id == key;
    //});
    //const updatedTokens = reqWList.tokens.concat(data);
    //const updatedTokens = {
    //  _id: key,
    //  tokens: name,
    //  name: data[0],
    //};
    //const res = reqWList.update({ tokens: updatedTokens }).save();
    //return res;

    const reqWList = this.WatchLists.find((obj: any) => {
        obj._id == key;
      });
      
    if (name)
    {
      reqWList.name = name;
    }
    if (token)
    {
      reqWList.symbol = token;
    }

    const resul = this.WatchLists.update({ tokens: reqWList
    }).save(); 
    return resul;

  }
}
