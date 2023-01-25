import { Injectable } from '@nestjs/common';
import { DbService } from './shared';

@Injectable()
export class AppService {
  constructor(private readonly db: DbService) {}
  async getHello() {
    //const result = await this.db.create('vitalikWatchlist', ['matic-network']);
    //return `Hello Wold! ${JSON.stringify(result)}`;
  }

  async fileread()
  {
    const file = await this.db.readAll();
    return file;
  }

  async createuser(name: string)
  {
    console.log(name);
    const user = await this.db.create(name , []);
    return user;
  }

  async updateuser(id: string, name: string, token: string)
  {
    const u_user = await this.db.update(id , name, token);
    return u_user;
  }

  async getbyid (id: string)
  {
    const usersbyid = await this.db.find(id);
    return usersbyid;
  }
}
