import React, { Component } from 'react';
import Competence from 'competence/competence.js';
import Education from 'education/education.js';
import Experience from 'experience/experience.js';
import Interests from 'interests/interests.js';


class Main extends Component {
  render() {
    return (
      <main className="main">
        <Competence></Competence>
        <Education></Education>
        <Experience></Experience>
        <Interests></Interests>
      </main>
    );
  }
}

export default Main;
