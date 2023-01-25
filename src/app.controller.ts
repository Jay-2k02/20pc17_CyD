import { Controller, Get, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  async getHello() {
    return "Hello";
  }

  //2.
  //1.Read all the elements in the data file
  @Get('/readfile')
  async readfile() {
    return this.appService.fileread();
  }

  //2.To create an user
  @Post('/createuser')
  async createFile(@Body('name') name: string) {
    console.log(name);
    return this.appService.createuser(name);
  }

  //3.Updating the user by mentioning their id
  @Post('/updateuser')
  async updateFile(@Body('id') id: string, @Body('name') name: string, @Body('Symbol') token: string)
  {
    return this.appService.updateuser(id, name, token);
  }

  //5.Getting the element by their id
  @Get('getbyid')
  async getbyid (@Body('id') id: string)
  {
    return this.appService.getbyid(id)
  }

  //4.Symbol to be deleted
  @Get('getdelsymbol')
  async getdeltoken (@Body('symbol') symbol: string)
  {
    return this.appService.delbysymbol (symbol);
  }

  //6.Delete watchlist by id
  @Get('getdelid')
  async getdelid (@Body('id') id: string)
  {
    return this.appService.delbyid (id);
  }
}
