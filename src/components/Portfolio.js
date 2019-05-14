import React, { Component } from 'react';
import BarkCo from '../photos/BarkCo.gif'

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-container">
        <h1 className="portfolio-header">Portfolio</h1>
        <p className="portfolio-description">I currently <strong>available</strong> for freelancing and am also working with national political organizations and non-profits</p>
        <br />
        <div className="portfolio-item-container">
          <a href="https://bark.co/" className="portfolio-project-title" target="_blank">Bark.co</a>
          <p className="portfolio-project-description">A website for users interested in Bark as a company including a home page, careers page, press page, and contact page built using Rails and Vue.js</p>
          <img src={BarkCo} alt="" className="bark-co-image"></img><br />
        </div>
      </div>
    );
  }
}

export default Portfolio;
