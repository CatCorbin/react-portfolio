import React, { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

const App = () => {
  const [currentSection, setCurrentSection] = useState('About Me');

  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  return (
    <div>
      <Header
        developerName="Cat Corbin"
        sections={sections}
        currentSection={currentSection}
        onSectionChange={handleSectionChange}
      />

      <main>
        {currentSection === 'About Me' && <AboutMe />}
        {currentSection === 'Portfolio' && <Portfolio />}
        {currentSection === 'Contact' && <Contact />}
        {currentSection === 'Resume' && <Resume />}
      </main>

      <Footer />
    </div>
  );
};

export default App;