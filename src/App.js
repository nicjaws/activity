import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import { Activity } from "./Components/Activity";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activity/:activityId" element={<Activity/>} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
