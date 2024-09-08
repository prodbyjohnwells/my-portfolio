import React, { useState } from 'react';
import DataAnalytics from './DataAnalytics';
import './App.css';


// Import cursor images
import dataAnalysisCursor from './assets/emoji_chart.png';
import programmingCursor from './assets/emoji_floppy.png';
import musicCursor from './assets/emoji_music.png';

const sections = {
  home: (
    <div id="home" className="section active">
      <div className="headshot">
        <img src="/Professional_Headshot.jpg" alt="Headshot" />
      </div>
      <div className="about-me">
        <h1>About Me</h1>
        <p>
          Hey there! I'm <strong>John</strong>, a certified Front-End Programmer and Data Analyst with a strong foundation in both technology and data-driven insights.
        </p>
        <p>
          With expertise in both front-end development and data analysis, I excel at blending technical skills and analytical thinking to build dynamic web solutions and uncover valuable insights from complex datasets.
        </p>
        <p>
          Whether I’m coding innovative web applications, developing robust data models, or designing intuitive visualizations, I approach each project with enthusiasm and precision.
        </p>
        <p>
          Outside of my professional endeavors, I enjoy composing music, playing RPG games, and embarking on adventures with my family.
        </p>
        <p>
          Let’s connect and explore how my diverse skill set can contribute to your team's success! Feel free to drop me a message—I’d love to chat about how we can leverage both technology and data to achieve your goals.
        </p>
      </div>
    </div>
  ),
  'data-analysis': (
    <div id="data-analysis" className="section">
      <DataAnalytics />
    </div>
  ),
  // Add other sections here
  programming: (
    <div id="programming" className="section">
      {/* Content for Programming section */}
    </div>
  ),
  music: (
    <div id="music" className="section">
      {/* Content for Music section */}
    </div>
  ),
  contact: (
    <div id="contact" className="section">
      {/* Content for Contact section */}
    </div>
  )
};

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="container">
      <nav className="navbar">
        <ul>
          <li><a href="#home" onClick={() => setActiveSection('home')}>Home</a></li>
          <li>
            <a
              href="#data-analysis"
              onClick={() => setActiveSection('data-analysis')}
              style={{ cursor: `url(${dataAnalysisCursor}), auto` }}
            >
              Data Analysis
            </a>
          </li>
          <li>
            <a
              href="#programming"
              onClick={() => setActiveSection('programming')}
              style={{ cursor: `url(${programmingCursor}), auto` }}
            >
              Programming
            </a>
          </li>
          <li>
            <a
              href="#music"
              onClick={() => setActiveSection('music')}
              style={{ cursor: `url(${musicCursor}), auto` }}
            >
              Music
            </a>
          </li>
          <li><a href="#contact" onClick={() => setActiveSection('contact')}>Contact</a></li>
        </ul>
      </nav>
      <main id="content">
        {sections[activeSection]}
      </main>
    </div>
  );
}

export default App;
