import React, { Component } from 'react';
import GoalIcon from '../icons/GoalIcon.png';
import CreativityIcon from '../icons/CreativityIcon.png';
import LightningIcon from '../icons/LightningIcon.png';


class AboutMe extends Component {
  render() {
    return (
      <div>
      <h1 className="about-title">About Melissa's Websites</h1><br />
        <div className="about-container">
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
            <h2>Inutitive UX/UI</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
