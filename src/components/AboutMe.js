import React from 'react';
import myImage from '../images/headshot.png';

const AboutMe = () => {
  return (
    <section>
      <h2>About Me</h2>
      <div>
      <img src={myImage} alt="Cat Corbin" />
        <p>
          Hi there! My name is Caybree Corbin, but I go by Cat! I am a new web developer, having recently completed the Fullstack Web Development Coding Bootcamp through the University of Utah. I am very passionate and eager to learn.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;