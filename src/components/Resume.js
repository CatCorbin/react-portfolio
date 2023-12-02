import React from 'react';

const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <p>
        Download my resume:{' '}
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume.pdf
        </a>
      </p>
      <h3>Technical Proficiencies</h3>
      <ul>
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>MongoDB</li>
        <li>MySQL & NoSQL</li>
        <li>Node</li>
        <li>Express</li>
      </ul>
    </section>
  );
};

export default Resume;
