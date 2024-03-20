import "./App.css";

import React, { Component } from "react";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About/About";

export default class App extends Component {
  pageSize = 5;
  apikey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <div>
        <LoadingBar height={3} color="#D71313" progress={this.state.progress} />
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="general"
                  pageSize={12}
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="business"
                  pageSize={12}
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="entertainment"
                  pageSize={12}
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="health"
                  pageSize={12}
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="science"
                  pageSize={12}
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="sports"
                  pageSize={12}
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  apikey={this.apikey}
                  key="technology"
                  pageSize={12}
                  category="technology"
                />
              }
            ></Route>
          </Routes>
          <Routes><Route path="/About" element={<About/>}></Route></Routes>          
          <Footer />
        </Router>
      </div>
    );
  }
}
