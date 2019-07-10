import React, { Component } from 'react';
import './App.css';
import { Icon } from 'semantic-ui-react'


class App extends Component {

  makeStars = (num) => {
    let star = "\u2605";
    let unfinished_star = "\u2606";
    return (
    <span className="stars">
      {star.repeat(num)}{unfinished_star.repeat(5-num)}
    </span>
    );
  }

  render() {
    return (
      <div className="app">
        <div className="bar">
          <div className="title">Qixin Chen</div>
          <div className="profile_pic"><img className="me"alt="me" src={require('./me.jpg')} /></div>
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
            <a className="a" href='#Education'>
              <div className="Education">
                Education
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
              <div className="about">
                <div className="about-title">About Me</div>
                <div className="about-content">
                  Hi, my name is Qixin Chen. I am a senior at Stony Brook University studying Computer Science.
                  My main set of skills are fullstack web development, JS, Java, and Python. I would love to be involved in game development.
                  On the non-tech related topics, I love to participate in most sports involving a racket and a ball.
                </div>
              </div>
            </div>
          </div>
          <div id='Education'>
            <div className="content-title">Education</div>
            <div className="content-education">
              <div className="education-title">College</div>
              <div className="education-college">
                <div className="college-intro">
                  <b>Stony Brook University</b>
                  <p>Aug 2016 - Dec 2019</p>
                </div>
                <div className="college-detail">
                  <b>Bachelor of Science: Computer Science</b>
                  <p>
                    Here is where I accumulated my software building knowledge, 
                    both frontend and backend. I was also taught basics of databases, algorithms,
                    and programming languages. On top of the basics, I learned teamwork, time management,
                    and leadership skills.
                  </p>
                </div>
              </div>
              <div className="education-hs">High School</div>
              <div className="education-college">
                <div className="college-intro">
                  <b>Brooklyn Technical High School</b>
                  <p>Sept 2012 - June 2016</p>
                </div>
                <div className="college-detail">
                  <b>Software Engineering Major</b>
                  <p>
                    My initial coding experience comes from my high school, and it was web development and software development.
                    I got my first taste of JavaScript, HTML, CSS, PHP, Java, and tiny bits of SQL.
                    Those tastes carried me a long way, even through college.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id='Experiences'>
            <div className="content-title">Experiences</div>
            <div className="content-education">
              <div className="education-title">Career</div>
              <div className="education-college">
                <div className="college-intro">
                  <b>Stony Brook University</b>
                  <p>Aug 2016 - Dec 2019</p>
                </div>
                <div className="college-detail">
                  <b>Bachelor of Science: Computer Science</b>
                  <p>
                    Here is where I accumulated my software building knowledge, 
                    both frontend and backend. I was also taught basics of databases, algorithms,
                    and programming languages. On top of the basics, I learned teamwork, time management,
                    and leadership skills.
                  </p>
                </div>
              </div>
              <div className="education-college">
                <div className="college-intro">
                  <b>Brooklyn Technical High School</b>
                  <p>Sept 2012 - June 2016</p>
                </div>
                <div className="college-detail">
                  <b>Software Engineering Major</b>
                  <p>
                    My initial coding experience comes from my high school, and it was web development and software development.
                    I got my first taste of JavaScript, HTML, CSS, PHP, Java, and tiny bits of SQL.
                    Those tastes carried me a long way, even through college.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id='Skills'>
            <div className="content-title">Skills</div>
            <div className="content-skill">
              <div className="skill-program">Programming Languages</div>
              <ul className="PL">
                <li>JavaScript {this.makeStars(5)}</li> 
                <li>Python {this.makeStars(4)}</li>
                <li>SQL {this.makeStars(4)}</li>
                <li>Java {this.makeStars(4)}</li>
                <li>C {this.makeStars(3)}</li>
                <li>Matlab {this.makeStars(3)}</li>
                <li>MIPS {this.makeStars(3)}</li>
                <li>Perl {this.makeStars(3)}</li>
                <li>SML {this.makeStars(3)}</li>
              </ul>
              <div className="skill-other">Frameworks and Others</div>
              <ul className="DL">
                <li>React {this.makeStars(5)}</li>
                <li>Redux {this.makeStars(5)}</li>
                <li>Semantic-UI {this.makeStars(5)}</li>
                <li>Material-UI {this.makeStars(5)}</li>
                <li>Firebase {this.makeStars(5)}</li>
                <li>NodeJS {this.makeStars(4)}</li>
                <li>CSS {this.makeStars(4)}</li>
                <li>Django REST {this.makeStars(4)}</li>
                <li>Git {this.makeStars(4)}</li>
                <li>HTML {this.makeStars(4)}</li>
                <li>Linux Command {this.makeStars(4)}</li>
                <li>Pusher {this.makeStars(3)}</li>
                <li>React Native {this.makeStars(3)}</li>
              </ul>
            </div>
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
