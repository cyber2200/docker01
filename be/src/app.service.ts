import { Injectable } from '@nestjs/common';
import { MongoDataLayer } from './models/MongoDataLayer';
import { MysqlDataLayer } from './models/MysqlDataLayer';
import { PgDataLayer } from './models/PgDataLayer';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getMysqlTestRes(): any {
    const mysqlDataLayer = new MysqlDataLayer();
    return mysqlDataLayer.getMysqlTestRes();
  }

  getMongotTestRes(): any {
    const mongoDataLayer = new MongoDataLayer();
    return mongoDataLayer.getMongotTestRes();
  }

  getPgTestRes(): any {
    const pgDataLayer = new PgDataLayer();
    return pgDataLayer.getPgTestRes();
  }

  apiLogin(postData): any {
    const mysqlDataLayer = new MysqlDataLayer();
    return mysqlDataLayer.apiLogin(postData);
  }
}
