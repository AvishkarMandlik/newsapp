import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  a ="guys";
  b ="class based"
  render() {
    return (
      <div>
        Hello {this.a},i am learning {this.b} Components
      </div>
    )
  }
}
