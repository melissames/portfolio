import React, { Component } from 'react';
import GoalIcon from '../icons/GoalIcon.png';
import CreativityIcon from '../icons/CreativityIcon.png';
import LightningIcon from '../icons/LightningIcon.png';


class AboutMe extends Component {
  render() {
    return (
      <div>
      <h1 className="about-title">About Melissa</h1>
      <p className="about-description">NYC based Web Developer with an interest in the intersection technology and creativity</p>
      <p className="about-description">Specialized in Mongo, Express, React, and Node or Ruby, Vue, and Webpack</p>
      <br />
      <h1 className="about-title">What's Important</h1><br />
        <div className="about-icon-container">
          <div className="about-icon">
            <img src={LightningIcon} alt=""></img>
            <h2>Fast Load Times</h2>
          </div>
          <div className="about-icon">
            <img src={CreativityIcon} alt=""></img>
            <h2>Beautiful Layouts</h2>
          </div>
          <div className="about-icon">
            <img src={GoalIcon} alt=""></img>
            <h2>Inuitive UX/UI</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
