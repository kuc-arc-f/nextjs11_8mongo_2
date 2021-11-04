import LibMongo from "../../lib/LibMongo"

export default async function testMongoAdd(req, res) {
  try{
    const data = req.body
    let item: any = {
      name: data.title ,  
      content: data.content ,
      up_date: data.up_date,
    };
    const client = await LibMongo.getClient();
    const collection = client.db(process.env.MONGODB_DB_NAME).collection("books");
    await collection.insertOne(item); 
    client.close();
//console.log(data);
    const ret ={
      items: data
    }
    res.json(ret);
  } catch (err) {
    console.error(err);
    res.status(500).send();    
  }
}
