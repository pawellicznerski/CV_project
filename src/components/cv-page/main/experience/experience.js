import React, { Component } from 'react';
import ExperienceBar from './__experience__experience-progress-bar/experience__experience-progress-bar.js';


class Experience extends Component {
  render() {
    return (
      <div className="education">
        <div className="main__section-name experience__section-name">
          <div className="main__section-name__icon experience__section-name__icon_experience"></div>
          <p className="main__section-name__text experience__section-name__text_experience">experience</p>
        </div>
        <ExperienceBar></ExperienceBar>
      </div>
    );
  }
}

export default Experience;
