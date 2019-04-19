import React, { Component } from 'react';
import NewsCard from './components/NewsCard';
import Nav from './components/Nav';

import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  render() {

      return (

        <div className="App">

          <Nav />
          <NewsCard />


        </div>
      )
    }

}


export default App;
