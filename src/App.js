import React, { useState } from 'react';
import Navbar from './Navbar';
import DataAnalytics from './DataAnalytics';
import Programming from './Programming';
import MusicPage from './MusicPage';
import ContactForm from './ContactForm';
import './App.css';

const sections = {
  home: (
    <div id="home" className="home-section section active">
      <div className="title">
      <h1>John's Professional Portfolio</h1>
      </div>
      <div className="headshot">
        <img src={`${process.env.PUBLIC_URL}/Professional_Headshot.jpg`} alt="Headshot" />
      </div>
      <div className="about-me">
        <h1>About Me</h1>
        <p>
          Step into a world where <em>technical expertise</em> and <strong>analytical insight</strong> seamlessly blend to drive innovation. I'm <strong>John</strong>, a certified Front-End Programmer and Data Analyst, dedicated to building <em>dynamic web applications</em> and unlocking <strong>valuable insights</strong> from complex data.
        </p>
        <br />
        <p>
          With a passion for <em>crafting solutions</em> that merge design and functionality, I strive to create intuitive digital experiences and powerful <strong>visualizations</strong> that make data more accessible and engaging.
        </p>
        <br />
        <p>
          My approach is rooted in a love for <strong>precision</strong> and <em>problem-solving</em>, whether I'm coding immersive websites or diving deep into data analysis. Every project is an opportunity to <strong>transform ideas</strong> into actionable outcomes.
        </p>
        <br />
        <p>
          Outside the tech world, I channel my creativity into <strong>music production</strong>, RPG games, and spending time with my family—always seeking new ways to <em>explore, create,</em> and <strong>innovate</strong>.
        </p>
        <br />
        <p>
          Let's collaborate and <strong>harness the power of technology</strong> and data to drive success for your team. Drop me a message—I'm eager to connect and explore new possibilities.
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
