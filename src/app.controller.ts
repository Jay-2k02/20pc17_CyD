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

  @Get('/readfile')
  async readfile() {
    return this.appService.fileread();
  }

  @Post('/createuser')
  async createFile(@Body('name') name: string) {
    console.log(name);
    return this.appService.createuser(name);
  }

  @Post('/updateuser')
  async updateFile(@Body('id') id: string, @Body('name') name: string, @Body('Symbol') token: string)
  {
    return this.appService.updateuser(id, name, token);
  }

  @Get('getbyid')
  async getbyid (@Body('id') id: string)
  {
    return this.appService.getbyid(id)
  }
}
