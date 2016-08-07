import React from 'react';

export default class Layout extends React.Component {
  constructor(){
    super();
    this.val = 3;
  }
  getName(){
    return "nik"+this.val;
  }
  render(){
    return (
      <h1>Hello from  {this.getName()}</h1>
    );
  }
}
