//
const LibTest = {
  addItem: async function(){
    try{
      const item = {
        title: "t1",
        content: "111",
        up_date: new Date(),
      }
//console.log(item)
      const res = await fetch(process.env.BASE_URL + '/api/test_mongo_add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(item),
      });
      if (res.status === 200) {
        const json = await res.json()
console.log(json)
      } else {
        throw new Error(await res.text());
      }      
    } catch (err) {
      console.log(err);
      throw new Error('Error, addItem');
    }
  },   

}
export default LibTest;
