import React, { Component } from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp'
//import {render} from '@testing-library/react';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = ({
      businesses: []
    });

    this.searchYelp = this.searchYelp.bind(this);
  }

searchYelp(term,location,sorBy){
  console.log(`term: ${term}, location: ${location}, sorBy: ${sorBy}`);
  Yelp.search(term, location, sorBy).then(businesses=>{
    this.setState({ businesses: businesses })  
    })
}

render() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={this.searchYelp} />
      <BusinessList businesses={this.state.businesses} />
    </div>
    );
}
}

export default App;