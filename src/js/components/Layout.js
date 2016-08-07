import React from 'react';

import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component {
  constructor(){
    super();
    this.state = { title: "Welcome!"};
  }
  changeTitle(title){
    // note ES6 allows this for title : title
    this.setState( {title});
  }
  render(){
    // have to bind(this) or changeTitle will execute in the user component space
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
