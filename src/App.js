import React from 'react';
import './App.css';
import "./styles/gradient.css"
import Home from './components/home';
import GradientPage from './components/transition1';
import AboutPage from './components/about';
import ExperiencesPage from './components/experiences';
import ProjectsPage from './components/projects';
import Designs from './components/designs';
import CertificatesPage from './components/certificates';
import Hobbies from './components/hobbies';
import Connect from './components/connect';
import Technologies from './components/technologies';
function App() {
  return (
    <div className="App">
      <header className="App-header">
            <Home />
            <GradientPage className="1" />
            <AboutPage />
            <GradientPage className="2" />
            <ExperiencesPage />
            <GradientPage className="3" />
            <ProjectsPage />
            <GradientPage className="4" />
            <Technologies />
            <GradientPage className="5" />
            <Designs />
            <GradientPage className="6" />
            {/* <CertificatesPage />
            <GradientPage className="7" />
            <Hobbies />
            <GradientPage className="8" />
            <Connect /> */}
      </header>
    </div>
  );
}

export default App;
