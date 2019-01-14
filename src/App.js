import React, { Component } from 'react';
import './App.css';
import PhotoHeader from './components/PhotoHeader';
import AboutMe from './components/AboutMe';

class App extends Component {
  render() {
    return (
      <div className="app-styling">
        <PhotoHeader />
        <AboutMe />
      </div>
    );
  }
}

export default App;
