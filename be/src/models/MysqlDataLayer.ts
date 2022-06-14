export class MysqlDataLayer {
    async getMysqlTestRes() {
      const mysql = require('mysql2/promise');
      const connection = await mysql.createConnection({ host: 'dct_db01', user: 'dct_db01', password: '123qwe', database: 'dct_db01' });
      const res = await connection.query('SELECT * FROM `event_log`;');
      await connection.end();
      const ret = { rows: [] };
      ret.rows = res[0];
      return ret;
    }
  }