// LibMongo
const MongoClient = require('mongodb').MongoClient;

//
const LibMongo = {
  init:function(){
    this.dbName = process.env.MONGODB_DB_NAME
  },
  getDbName:function(){
    return this.dbName;
  },
  getClient:async function(){
    try{
      const uri = process.env.MONGODB_URI + "?retryWrites=true&w=majority";
      //console.log(process.env.MONGODB_DB_NAME);
      const client = await new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      await client.connect();
      return client
    } catch (err) {
      console.log(err);
      throw new Error('Error, getClient');
    }
  },   

}
export default LibMongo;
