import React from 'react';

const Header = ({ developerName, sections, currentSection, onSectionChange }) => {
  return (
    <header>
      <h1>{developerName}'s Portfolio</h1>
      <nav>
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => onSectionChange(section)}
            className={currentSection === section ? 'active' : ''}
          >
            {section}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;