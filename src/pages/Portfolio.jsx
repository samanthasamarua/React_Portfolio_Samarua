import React from 'react';
import { Flex, Box, Heading } from '@chakra-ui/react';
import Project from '../components/Project'; // Assuming you have a Project component


const Portfolio = () => {
  // Define an array of project data containing title, image source, app link, and repo link
  const projects = [
    {
      title: 'Personal Portfolio',
      imageSrc: './src/assets/Personal_Portfolio.png',
      appLink: 'https://samanthasamarua.github.io/Samantha-Samarua/',
      repoLink: 'https://github.com/samanthasamarua/Samantha-Samarua'
    },
    {
      title: 'Password Generator',
      imageSrc: './src/assets/Password_Generator.png',
      appLink: 'https://samanthasamarua.github.io/Password-Generator/',
      repoLink: 'https://github.com/samanthasamarua/Password-Generator'
    },
    {
        title: 'Work Day Scheduler',
        imageSrc: './src/assets/Work_Day_Scheduler.png',
        appLink: 'https://samanthasamarua.github.io/Online-WorkDay_Scheduler/',
        repoLink: 'https://github.com/samanthasamarua/Online-WorkDay_Scheduler?tab=readme-ov-file'
      },
      {
        title: 'Weather Dashboard',
        imageSrc: './src/assets/Weather_Dashboard.png',
        appLink: 'https://samanthasamarua.github.io/Weather-Dashboard/',
        repoLink: 'https://github.com/samanthasamarua/Weather-Dashboard'
      },
      {
        title: 'Express.js Note Taker',
        imageSrc: './src/assets/ExpressJS_NoteTaker.png',
        appLink: 'https://express-js-notetaker-ss-f712381bee8f.herokuapp.com/',
        repoLink: 'https://github.com/samanthasamarua/Express.js_Note_Taker'
      },
      {
        title: 'PWA Text Editor',
        imageSrc: './src/assets/PWA_Text_Editor.png',
        appLink: 'https://pwa-text-editor-challenge-19.onrender.com/',
        repoLink: 'https://github.com/samanthasamarua/PWA-Text_Editor'
      },
 
  ];

  return (
    <Flex direction="column" align="center" py={8} bg="#F3F4F6">
      <Heading as="h2" fontSize="50px" fontFamily="Agbalumo" fontWeight="bold" mb={4}>Portfolio</Heading>
      <Flex justify="center" align="center" flexWrap="wrap">
        {projects.map((project, index) => (
          <Box
            key={index}
            p={4}
            m={4}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            _hover={{ bg: 'lightBlue' }} // Change background color on hover
          >
            <Project
              title={project.title}
              imageSrc={project.imageSrc}
              appLink={project.appLink}
              repoLink={project.repoLink}
            />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}


export default Portfolio;
