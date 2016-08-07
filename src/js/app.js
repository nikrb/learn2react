import React from 'react';
import ReactDOM from 'react-dom';
import style from '../scss/app.scss';
import axios from 'axios';

export default class Main extends React.Component {
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

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);
