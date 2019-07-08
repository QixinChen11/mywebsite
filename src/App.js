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
              <Icon size="large" circular inverted name='github' />
            </a>
            <a className="a" href="https://www.linkedin.com/in/qixin-chen-01a191156/" rel="noopener noreferrer" target="_blank">
              <Icon size="large" circular inverted name='linkedin' />
            </a>
          </div>
          
          <div>
            <a className="a" href='#Profile'>
              <div className="Profile">
                Profile
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
          <div id='Profile'>
            <div className="content-title">Profile</div>
            <div className="content-about">
              <div className="about-title">About Me</div>
              <div className="details-title">Details</div>
            </div>

          </div>
          <div id='Experiences'>
            <div className="content-title">Experiences</div>
            <div className="content-content"></div>
          </div>
          <div id='Skills'>
            <div className="content-title">Skills</div>
            <div className="content-content"></div>
          </div>
          <div id='Projects'>
            <div className="content-title">Projects</div>
            <div className="content-content"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
