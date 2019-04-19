import React, { Component } from 'react';

import LeanBar from './LeanBar'

import VoteButton from './VoteButton';


class NewsCard extends Component {

  constructor(props){
    super(props);
    this.state = {
  
      items: {},
      isLoaded: false,
  
    }
  }

  componentDidMount() {

    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=f1b9295bbd974909a4b69cfab0942a2d')
      .then(res => res.json())
      .then(json => {

        this.setState({
          isLoaded: true,
          items: json,

        })

      })
    
  }

  render() {

    let { isLoaded, items } = this.state;

    if (!isLoaded) {
      return (
        <div>Loading...</div>
      )
    } else {

      return (

          <div className="card text-center"> 
              {items.articles.map(item => (
                
                <div className="card-body" key={item.source.id}>
                  <a href={item.url}>
                    <h5 className="card-title">{item.title}</h5>
                    <h6> {(item.author === null) ? null : item.author}</h6>
                    <img className="card-img-top" src={item.urlToImage} alt="News"></img>
                    <p className="card-text">{item.description}</p>

                  </a><br/>

                    <LeanBar />
                    <VoteButton />
                </div>

            ))};

          </div>
      )
    }


  }
}

export default NewsCard;
