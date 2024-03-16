import './App.css';

import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import News from './components/News/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 5;
  state = {
    progress : 0
  }
  setProgress(progress) {
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={12} category="general"/>}></Route>
            <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={12} category="business"/>}></Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={12} category="entertainment"/>}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={12} category="health"/>}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={12} category="science"/>}></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={12} category="sports"/>}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={12} category="technology"/>}></Route>          
          </Routes>
          <Footer/>
        </Router>
      </div>
    )
  }
}

