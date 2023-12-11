import React from 'react';
import socialMediaShowdown from '../images/sms.png';
import noteTaker from '../images/nt.png';
import terse from '../images/terse.png';
import passwordGenerator from '../images/pg.png';
import dayScheduler from '../images/ds.png';
import portfolio from '../images/p.png';

const Portfolio = () => {
  const projects = [
    {
      title: 'Social Media Showdown',
      description: 'Musk vs Zuckerberg site with a coutndown timer to their alleged fight, voting for who you think will win, and stock and social media info',
      imageSrc:{socialMediaShowdown},
      deployedLink: 'https://c-hickman23.github.io/Musk-Vs.-Zuck/',
      githubLink: 'https://github.com/CatCorbin/social-media-showdown',
    },
    {
      title: 'Note Taker',
      description: 'A place to take notes, but more fun',
      imageSrc:{noteTaker},
      deployedLink: 'https://catcorbin-notetaker-85973421238a.herokuapp.com/',
      githubLink: 'https://github.com/CatCorbin/note-taker',
    },
    {
        title: 'Terse',
        description: 'Social media site that allows posts, comments, DMs, and group chats, but you are only allowed to send one word',
        imageSrc:{terse},
        deployedLink: 'https://tersesocialmedia-production.up.railway.app/',
        githubLink: 'https://github.com/CatCorbin/terse',
      },
      {
        title: 'Password Generator',
        description: 'An application that allows you to give it the criteria, and it will generate you a random password.',
        imageSrc:{passwordGenerator},
        deployedLink: 'https://catcorbin.github.io/password-generator/',
        githubLink: 'https://github.com/CatCorbin/password-generator',
      },
      {
        title: 'Day Scheduler',
        description: 'An hour by hour calendar that you can use to schedule out your day',
        imageSrc:{dayScheduler},
        deployedLink: 'https://catcorbin.github.io/day-scheduler/',
        githubLink: 'https://github.com/CatCorbin/day-scheduler',
      },
      {
        title: 'Portfolio',
        description: 'The first portfolio I made with HTML & CSS, a stark contrast to this portfolio made with React',
        imageSrc:{portfolio},
        deployedLink: 'https://catcorbin.github.io/Cat-Corbin-Portfolio/',
        githubLink: 'https://github.com/CatCorbin/Cat-Corbin-Portfolio',
      },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <img src={project.imageSrc} alt={`${project.title} Screenshot`} />
          <p>
            Deployed Link:{' '}
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
              {project.deployedLink}
            </a>
          </p>
          <p>
            GitHub Repository:{' '}
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              {project.githubLink}
            </a>
          </p>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;