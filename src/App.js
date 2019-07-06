import React, { Component } from 'react';
import './App.css';
import { Icon } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div>
        <div className="bar">
          <div className="title">Qixin Chen</div>
          
          <div className="links">
            <a className="a" href="https://github.com/QixinChen11" rel="noopener noreferrer" target="_blank">
              <Icon circular inverted name='github' />
            </a>
            <a className="a" href="https://www.linkedin.com/in/qixin-chen-01a191156/" rel="noopener noreferrer" target="_blank">
              <Icon circular inverted name='linkedin' />
            </a>
          </div>
          
          <div>
            <a className="a" href='#About_me'>
              <div className="About_me">
                About Me h
              </div>
            </a>
          </div>
          <div>
            <a className="a" href='#Experiences'>
              <div className="Experiences">
                Experiences
              </div>
            </a>
          </div>
          <div>
            <a className="a" href='#Skills'>
              <div className="Skills">
                Skills
              </div>
            </a>
          </div>
          <div>
            <a className="a" href='#Projects'>
              <div className="Projects">
                Projects
              </div>
            </a>
          </div>
        </div>
        <div className="content">
          <div id='About_me'>
            <div className="content-title">About me</div>
          </div>
          <div id='Experiences'>
            <div className="content-title">Experiences</div>
          </div>
          <div id='Skills'>
            <div className="content-title">Skills</div>
          </div>
          <div id='Projects'>
            <div className="content-title">Projects</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
