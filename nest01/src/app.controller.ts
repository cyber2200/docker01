import { Controller, Get, Post, Req, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/mysqlTest')
  mysqlTest(): any {
    return this.appService.getMysqlTestRes();
  }

  @Post('/mongoTest')
  mongoTest(): any {
    return this.appService.getMongotTestRes();
  }

  @Post('/pgTest')
  pgTest(): any {
    return this.appService.getPgTestRes();
  }

  @Post('/api/login')
  apiLogin(@Req() request: Request): any {
    console.log(request.body);
    return this.appService.apiLogin(request.body);
  }
}
