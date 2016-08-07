import React from 'react';

import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component {
  constructor(){
    super();
    // use state only if this component affected
    this.state = { name:"nik"};
  }
  render(){
    setTimeout( () => {
      this.setState( { name : "bob"});
    }, 1000);
    return (
      <div>
        {this.state.name}
        <Header />
        <Footer />
      </div>
    );
  }
}
