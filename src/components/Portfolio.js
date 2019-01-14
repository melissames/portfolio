import React, { Component } from 'react';
import ComingSoon from '../photos/ComingSoon.jpg';
import PieChart from '../photos/PieChart.png'

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-container">
        <h1 className="portfolio-header">Portfolio</h1>
        <h2 className="portfolio-description">I most recently partnered with another Flatiron grad to rewrite bark.co for Bark, creators of Barkbox.  I'm currently freelancing and working on creating my own large scale UI Library using CSS, JS, React, Vue, Angular, and D3.</h2>
        <div className="portfolio-list">
          <div className="portfolio-item">
            <img src={ComingSoon}></img>
            <h2>Underground UI</h2>
            <h3>A vast component Library using CSS, JS, React, Vue, Angular, and D3</h3>
          </div>
          <div className="portfolio-item">
            <h2>Bark.co</h2>
            <h3>A marketing website for users interested in Bark as a company including a home page, careers page, press page, and contact page</h3>
          </div>
          <div className="portfolio-item">
            <img src={PieChart}></img>
            <h2>PXL8</h2>
            <h3>A React front end and a Rails backend calls on the Artsy API to search artists and returns a Chart.js pie graph of the top 5 colors present in each photo using RMagick</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
