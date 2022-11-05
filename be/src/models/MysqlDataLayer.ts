export class MysqlDataLayer {
    async getMysqlTestRes() {
      const delay: any = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
      await delay(1000);

      const mysql = require('mysql2/promise');
      const connection = await mysql.createConnection({ host: 'dct_mysql01', user: 'dct_mysql01', password: '123qwe', database: 'dct_mysql01' });
      const res = await connection.query('SELECT * FROM `event_log`;');
      await connection.end();
      const ret = { rows: [] };
      ret.rows = res[0];
      return ret;
    }
  }