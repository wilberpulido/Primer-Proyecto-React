import React, { Component } from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
//import {render} from '@testing-library/react';

class App extends React.Component{
  render() {
  return(
      <div className="App">
          <h1>ravenous</h1>
          <SearchBar/>
          <BusinessList/>
      </div>
      )
  }

}

export default App;