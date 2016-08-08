import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  // FIXME: dynamic link - this doesn't actually work
  navigate(){
    // deprecated this.props.history.push( null, "/");
    // cannot read property pushState of undefined
    // this.context.router.pushState( null, "/");
  }
  render(){
    return (
      <div>
        <h1>KillerNews.net</h1>
        {this.props.children}
        <Link to="archives" className="btn btn-danger">Archives</Link>
        <Link to="settings"><button className="btn btn-success">Settings</button></Link>
        <button onClick={this.navigate.bind(this)}>Featured</button>
      </div>
    );
  }
}
