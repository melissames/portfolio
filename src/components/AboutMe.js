import React, { Component } from 'react';
import GoalIcon from '../icons/GoalIcon.png';
import CreativityIcon from '../icons/CreativityIcon.png';
import LightningIcon from '../icons/LightningIcon.png';


class AboutMe extends Component {
  render() {
    return (
      <div>
      <h1 className="about-title">About Melissa</h1>
      <h2 className="about-description">My career started in NYC while attending the Flatiron School for Full Stack Web Development.  As an art lover, I was naturally more drawn to the front end.  I worked at Barkbox remaking their website Bark.co and am now freelancing as well as creating and building my own projects.</h2>
      <br />
      <h1 className="about-title">What's Important</h1><br />
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
