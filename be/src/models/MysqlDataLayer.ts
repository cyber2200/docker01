import { Md5 } from 'ts-md5';
import { loginResponse } from 'src/types';

export class MysqlDataLayer {
    async q(q: string, vals: any) {
      const mysql = require('mysql2/promise');
      const connection = await mysql.createConnection({ host: 'dct_mysql01', user: 'dct_mysql01', password: '123qwe', database: 'dct_mysql01' });
      const res = await connection.query(q, vals);
      await connection.end();
      const ret: any = { rows: [] };
      ret.rows = res[0];
      return ret.rows;
    }

    async getMysqlTestRes() {
      const delay: any = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
      await delay(1000);
      const res = await this.q('SELECT * FROM `event_log`;', []);
      return res;
    }

    async apiLogin(postData) {
      // Response by type
      const ret: loginResponse = {
        res: 'NOK',
        msg: '',
        sessionId : ''
      };

      // Check if the Email exist
      const dbRes = await this.q('SELECT * FROM `users` WHERE `email` = ?;', [postData.email]);
      if (dbRes.length !== 0) {
        const userRow = dbRes[0];
        // Check password hash
        if (userRow.password === Md5.hashStr(postData.password)) {
          // Credentials are good
          ret.res = 'OK';
          // Create the session
          ret.sessionId = Md5.hashStr(Date.now().toString());
          await this.q('INSERT INTO `users_sessions` SET `sessionId` = ?, usersId = ?;', [ret.sessionId, userRow.id]);
          return ret;
        }
      }
      return ret;
    }
  }