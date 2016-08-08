import React from 'react';

import Article from '../components/Article';

export default class Archives extends React.Component {
  render(){
    const { query} = this.props.location;
    const { params} = this.props;
    let { article} = params;
    let { date, filter} = query;

    if( !article) article = "All";
    if( !date) date = "All";
    if( !filter) filter = "All";

    const articles = [
      "Some Article",
      "Another Article",
      "Yet Another Article",
      "Article For The Road"
    ].map( (title, i) => <Article key={i} title={title}/> );
    return (
      <div>
        <h1>Archives ({article})</h1>
        <h4>date: {date}. filter: {filter}</h4>
        <div className="row" >{articles}</div>
      </div>
    );
  }
}
