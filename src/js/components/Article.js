import React from 'react';

export default class Article extends React.Component {
  render(){
    const { title} = this.props;

    return (
      <div className="col-md-4">
        <h4>{title}</h4>
        <p>This is some article (archived) text</p>
        <a className="btn btn-default" href="#">More info</a>
      </div>
    );
  }
}
