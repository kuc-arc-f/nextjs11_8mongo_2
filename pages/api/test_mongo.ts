import LibMongo from "../../lib/LibMongo"

export default async function testMongo(req, res) {
  try{
    const client = await LibMongo.getClient();
    const collection = client.db(process.env.MONGODB_DB_NAME).collection("books");
    const items = await collection.find({}).toArray()
    client.close();
//console.log(items);
    const ret ={
      items: items
    }
    res.json(ret);
  } catch (err) {
    console.error(err);
    res.status(500).send();    
  }
}
