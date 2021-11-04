import React, {Component} from 'react';
import Layout from '../components/layout'
import LibTest from '../lib/LibTest'

//
export default class Test extends Component {
  constructor(props){
    super(props)
  }
  async componentDidMount(){
    try{
      const res = await fetch(process.env.BASE_URL+ '/api/test_mongo')
      const json = await res.json();
console.log(json);
    } catch (e) {
      console.error(e);
    }
  }   
  async clickHandle(){
console.log("#clickHandle");
    await LibTest.addItem();
  }
  render() {
    return (
      <Layout>
        <div className="container">
          <hr className="mt-2 mb-2" />
          <h1>test</h1>
          <hr />
          <button onClick={() =>this.clickHandle() }>Test</button>
        </div>
      </Layout>
    )    
  } 
}
