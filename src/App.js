import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';

export default class App extends Component {
  a ="guys";
  b ="class based"
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize={9} />
        Hello {this.a},i am learning {this.b} Components
      </div>
    )
  }
}

