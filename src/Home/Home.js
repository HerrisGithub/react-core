import React, { Component } from 'react';
import Nav from '.././components/Nav'
import Content from './Content'
import Footer from '.././components/Footer'
class Home extends Component {
  constructor(props){
    super(props)
    this.state={name:'herris'}
  }
  render() {
    return (
      <div className="App">
          <Nav/>
          <Content/>
          <Footer/>
      </div>
    );
  }
  getName(){
    return this.state.name
  }
}

export default Home;
