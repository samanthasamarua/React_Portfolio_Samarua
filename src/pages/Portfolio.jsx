import React from 'react';
import { Flex } from '@chakra-ui/react';
import Project from '../components/Project'; // Assuming you have a Project component

const Portfolio = () => {
  // Define an array of project data containing title, image source, app link, and repo link
  const projects = [
    {
      title: 'Personal Portfolio',
      imageSrc: '../../assets/Personal_Portfolio.png',
      appLink: 'https://samanthasamarua.github.io/Samantha-Samarua/',
      repoLink: 'https://github.com/samanthasamarua/Samantha-Samarua'
    },
    {
      title: 'Password Generator',
      imageSrc: '../../assets/Password_Generator.png',
      appLink: 'https://samanthasamarua.github.io/Password-Generator/',
      repoLink: 'https://github.com/samanthasamarua/Password-Generator'
    },
    {
        title: 'Work Day Scheduler',
        imageSrc: '../../assets/Work_Day_Scheduler.png',
        appLink: 'https://samanthasamarua.github.io/Online-WorkDay_Scheduler/',
        repoLink: 'https://github.com/samanthasamarua/Online-WorkDay_Scheduler?tab=readme-ov-file'
      },
      {
        title: 'Weather Dashboard',
        imageSrc: '../../assets/Weather_Dashboard.png',
        appLink: 'https://samanthasamarua.github.io/Weather-Dashboard/',
        repoLink: 'https://github.com/samanthasamarua/Weather-Dashboard'
      },
      {
        title: 'Express.js Note Taker',
        imageSrc: '../../assets/ExpressJS_NoteTaker.png',
        appLink: 'https://express-js-notetaker-ss-f712381bee8f.herokuapp.com/',
        repoLink: 'https://github.com/samanthasamarua/Express.js_Note_Taker'
      },
      {
        title: 'PWA Text Editor',
        imageSrc: '../../assets/PWA_Text_Editor.png',
        appLink: 'https://pwa-text-editor-challenge-19.onrender.com/',
        repoLink: 'https://github.com/samanthasamarua/PWA-Text_Editor'
      },
 
  ];

  return (
    <Flex justify="center" align="center" flexWrap="wrap" py={8}>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          imageSrc={project.imageSrc}
          appLink={project.appLink}
          repoLink={project.repoLink}
        />
      ))}
    </Flex>
  );
}

export default Portfolio;
