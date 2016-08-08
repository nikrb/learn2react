import React from 'react';

import Article from '../components/Article';

export default class Featured extends React.Component {
  render(){
    const articles = [
      "Some Article",
      "Another Article",
      "Yet Another Article",
      "Article For The Road"
    ].map( (title, i) => <Article key={i} title={title}/> );
    // const { title} = this.props;
    const adText = [
      "Ad Text #1",
      "Ad Text #2",
      "Ad Text #3",
      "Ad Text #4",
    ];
    const randomAd = adText[Math.round( Math.random()*(adText.length-1))]
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <div className="well text-center">
              {randomAd}
            </div>
          </div>
        </div>
        <div className="row" >{articles}</div>
      </div>
    );
  }
}
