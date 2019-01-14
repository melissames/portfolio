import React, { Component } from 'react';
import './App.css';
import PhotoHeader from './components/PhotoHeader';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio'

class App extends Component {
  render() {
    return (
      <div className="app-styling">
        <PhotoHeader />
        <AboutMe />
        <Portfolio />
      </div>
    );
  }
}

export default App;
