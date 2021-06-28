import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div class="menuButton" onclick="menuToggle()">
        <div class="sideMenu">
          <ul class="menu">
            <li><a href="#about-me">Home</a></li>
            <li><a href="#resume"> Resume</a></li>
            <li><a href="#work"> Work</a></li>
            <li><a href="#contact-me"> Contacts</a></li>
            </ul>
            </div>
        </div>

        <div>
          <div class="aboutme" id="about-me">
            <img src="css/IMG_0681.jpg" alt="Picture of me" />
            <div class="title">
              <h2>Home</h2>
              <p>
                Hey everyone, my name is Vincent and i'm currently aspiring to make the move to be a
                developer, I
                have
                recently just started so I don't have a lot to show yet but I'm hoping to fill this up with
                as much
                as my
                work as possible. A little bit about myself is that I love to try new foods and try to
                become the
                possible
                best in what i'm currently into.
              </p>
            </div>
          <div>
            <div class="resume" id="resume">
              <div class="title">
                <h3>Resume</h3>
                <p>Little bit about my pass work history I use to be a pizza delivery driver from about 2014-2017
                  and then I
                  moved on to work at Park Place Lexus starting as a valet, and eventually moved my way up to be a
                  Internal
                  Service Writer.
                  I decided I wanted a career path for myself so I made the jump to try and be a developer.
                </p>
                <br>
                </br>
                <p>Heres a link to my resume:<a
                  href="https://drive.google.com/file/d/1r-DaAH2vTEKh6VM5gSZxvCpBfYIuhF47/view?usp=sharing">My
                  Resume</a>
                </p>
              </div>
            </div>
            </div>
          </div>


          <div>
            <div class="work" id="work">
              <div class="title">
                <h4>Work</h4>
                <div class="row">
                  <div class="column">
                    <a href="https://github.com/itsvnvo/Project-1-Group-5" target="_blank">
                      <img src="css/stat.PNG" alt="stat" prop="width:90%" />
                    </a>
                    <a href="https://dmanley93.github.io/Project-1-Group-5/" target="_blank">Stat Tracker</a>
                  </div>

                  <div class="column">
                    <a href="https://github.com/jonathan-jablonski/podshack" target="_blank">
                      <img src="css/hero.png" alt="Pending" prop="width:90%" />
                    </a>
                    <a href="https://podshack.herokuapp.com/" target="_blank">Podshack</a>
                  </div>

                  <div class="column">
                    <a href="https://github.com/itsvnvo/workday-schedule" target="_blank">
                      <img src="css/workday.PNG" alt="Pending" prop="width:90%" />
                    </a>
                    <a href="https://itsvnvo.github.io/workday-schedule/" target="_blank">Workday scheduler</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="title">
              <div class="contact-me" id="contact-me">
                <h5>
                  Contact me
                </h5>
                <ul>
                  <li>Number:972-834-1816
                  </li>
                  <li>
                    <a href="https://github.com/itsvnvo" target="_blank">My Github</a>
                  </li>
                  <li>
                    Email: <a href="mailto:itsvnvo@gmail.com">Vincent Vo</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/vincent-vo-2b5a17203/" target="_blank">My Linkedin</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        );
      </div>
    )
  }
}

export default App;
