export class PgDataLayer {
    async getPgTestRes() {
      const { Client } = require('pg');
      const delay: any = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
      await delay(1000)
      const client: any = new Client({
        user: 'dct_pg01',
        host: 'dct_pg01',
        database: 'dct_pg01',
        password: '123qwe',
        port: 5432
      });
      await client.connect()
      const pg_res: any = await client.query('SELECT * FROM event_log');
      let rows: Array<object> = pg_res.rows;
      await client.end();
      return { rows };
    }
  }