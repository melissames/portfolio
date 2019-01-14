import React, { Component } from 'react';
import './App.css';
import PhotoHeader from './components/PhotoHeader';

class App extends Component {
  render() {
    return (
      <div className="app-styling">
        <PhotoHeader />
      </div>
    );
  }
}

export default App;
