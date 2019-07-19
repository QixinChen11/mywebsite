import React, { Component } from 'react';
import './App.css';
import { Icon } from 'semantic-ui-react'


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      highlight: ""
    }
  }

  makeStars = (num) => {
    let star = "\u2605";
    let unfinished_star = "\u2606";
    return (
    <span className="stars">
      {star.repeat(num)}{unfinished_star.repeat(5-num)}
    </span>
    );
  }

  changeClick = (e) => {
    this.setState({highlight: e})
  }
  

  render() {
    let pButton = "not-clicked-button";
    let edButton = "not-clicked-button";
    let exButton = "not-clicked-button";
    let sButton = "not-clicked-button";
    let proButton = "not-clicked-button";
    switch (this.state.highlight) {
      case "Profile":
        pButton = "clicked-button";
        break;
      case "Education":
        edButton = "clicked-button";
        break;
      case "Projects":
        proButton = "clicked-button";
        break;
      case "Skills":
        sButton = "clicked-button";
        break;
      case "Experiences":
        exButton = "clicked-button";
        break;
      default:
        break;
    }
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
            <a className="a" href='#Profile' onClick={()=> this.changeClick("Profile")}>
              <div id={pButton} className="Profile">
                Profile
              </div>
            </a>
          </div>
          <div>
            <a className="a" href='#Education' onClick={()=> this.changeClick("Education")}>
              <div id={edButton} className="Education">
                Education
              </div>
            </a>
          </div>
          <div>
            <a  className="a" href='#Experiences' onClick={()=> this.changeClick("Experiences")}>
              <div id={exButton} className="Experiences">
                Experiences
              </div>
            </a>
          </div>
          <div>
            <a className="a" href='#Skills' onClick={()=> this.changeClick("Skills")}>
              <div id={sButton} className="Skills">
                Skills
              </div>
            </a>
          </div>
          <div>
            <a  className="a" href='#Projects' onClick={()=> this.changeClick("Projects")}>
              <div id={proButton} className="Projects">
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
                <div className="profile_pic"><img className="me"alt="me" src={require('./me.jpg')} /></div>
                <div className="links">
                  <a className="a" href="https://github.com/QixinChen11" rel="noopener noreferrer" target="_blank">
                    <Icon size="large" circular inverted name='github' />
                  </a>
                  <a className="a" href="https://www.linkedin.com/in/qixin-chen-01a191156/" rel="noopener noreferrer" target="_blank">
                    <Icon size="large" circular inverted name='linkedin' />
                  </a>
                </div>
                <div className="about-content">
                  Hi, my name is Qixin Chen. I am a senior at Stony Brook University studying Computer Science.
                  My main set of skills are fullstack web development, JS, Java, and Python. I would love to be involved in game development.
                  On the non-tech related topics, I love to participate in most sports involving a racket and a ball.
                </div>
                <div className="email">Email: Qixin.ch3n@gmail.com</div>
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
                  <p>Sept 2012 - Jun 2016</p>
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
                  <b>MIT Scheller Teacher Education Program</b>
                  <p>Jun - Aug 2019</p>
                </div>
                <div className="college-detail">
                  <b>Fullstack Intern</b>
                  <p>
                    In this internship, I created an online simulation tool helped teachers with their 
                    school management skills. By using ReactJS and Django REST framework, I added tool features and
                    tool mechanics. I encountered my first experience with backend here, and optimized transaction time.<br />
                    ><a href="http://changeit-project.appspot.com" rel="noopener noreferrer" target="_blank">Change It!</a>
                  </p>
                </div>
              </div>
              <div className="education-college">
                <div className="college-intro">
                  <b>MIT Teacher Education Arcade</b>
                  <p>Jun - Aug 2018</p>
                </div>
                <div className="college-detail">
                  <b>Web Development Intern</b>
                  <p>
                    I worked on an interactive and collaborative game series that introduced the many STEM elements
                    using ReactJS. I also worked as a code flow leader for a team of three while tackling this project.
                    Additionally, I began the process of "appify" the game series. <br />
                    ><a href="http://virusgame-shared.firebaseapp.com" rel="noopener noreferrer" target="_blank">Virus Game</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id='Skills'>
            <div className="content-title">Skills</div>
            <div className="content-skill">
              <div className="skill-pl">
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
              </div>
              <div className="skill-fao">
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
          </div>
          <div id='Projects'>
            <div className="content-title">Projects</div>
            <div className="content-project">
              <div className="project-lyric">
                <div className="project-title">Lyrics</div>
                <a href="https://hackathon-a2826.firebaseapp.com/" rel="noopener noreferrer" target="_blank">
                  <img className="lyrics"  alt="lyrics" src={require('./lyrics.png')} />
                </a>
              </div>
              <div className="project-ctd">
                <div className="project-title-ctd">CTD</div>
                <a href="http://ctd2.github.io/" rel="noopener noreferrer" target="_blank">
                  <img className="ctd"  alt="lyrics" src={require('./ctd.png')} />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
