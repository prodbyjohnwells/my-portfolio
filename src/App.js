import React, { useState } from 'react';
import Navbar from './Navbar';
import DataAnalytics from './DataAnalytics';
import Programming from './Programming';
import MusicPage from './MusicPage';
import ContactForm from './ContactForm';
import './App.css';
import './styles.css';

const sections = {
  home: (
    <div id="home" className="section active">
      <div className="headshot">
        <img src={`${process.env.PUBLIC_URL}/Professional_Headshot.jpg`} alt="Headshot" />
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
  'data-analytics': (
    <div id="data-analytics" className="section">
      <DataAnalytics/>
    </div>
  ),
  programming: (
    <div id="programming" className="section">
      <Programming/>
    </div>
  ),
  music: (
    <div id="music" className="section">
      <MusicPage/>
    </div>
  ),
  contact: (
    <div id="contact" className="section">
      <ContactForm/>
    </div>
  )
};

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="parallax">
      <Navbar setActiveSection={setActiveSection} />
      <div className="container">
        <main id="content">
          {sections[activeSection]}
        </main>
      </div>
    </div>
  );
}

export default App;
