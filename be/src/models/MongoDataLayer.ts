import { MongoClient } from "mongodb";

export class MongoDataLayer {
  async getMongotTestRes() {
    const { MongoClient } = require('mongodb');
    const uri = 'mongodb://root:123qwe@docker01_mongo01:27017/';
    const client: MongoClient = new MongoClient(uri);
    try {
      await client.connect();
      const database: any = client.db('test');
      const test_data: any = database.collection('test01');
      const rows: Array<object> = await test_data.find({}, {}).toArray();

      return { rows };
    } finally {
      await client.close();
    }
    return { res: 'OK' };
  }
}