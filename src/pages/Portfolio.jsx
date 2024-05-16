import React from 'react';
import { Flex, Box, Heading } from '@chakra-ui/react';
import Project from '../components/Project'; 
import PersonalPortfolio from '../assets/Personal_Portfolio.png';
import PasswordGenerator from '../assets/Password_Generator.png';
import WorkScheduler from '../assets/Work_Day_Scheduler.png';
import WeatherDashboard from '../assets/Weather_Dashboard.png';
import NoteTaker from '../assets/ExpressJS_NoteTaker.png';
import TextEditor from '../assets/PWA_Text_Editor.png';


const Portfolio = () => {
  
  const projects = [
    {
      title: 'Personal Portfolio',
      imageSrc: PersonalPortfolio,
      appLink: 'https://samanthasamarua.github.io/Samantha-Samarua/',
      repoLink: 'https://github.com/samanthasamarua/Samantha-Samarua'
    },
    {
      title: 'Password Generator',
      imageSrc: PasswordGenerator,
      appLink: 'https://samanthasamarua.github.io/Password-Generator/',
      repoLink: 'https://github.com/samanthasamarua/Password-Generator'
    },
    {
        title: 'Work Day Scheduler',
        imageSrc: WorkScheduler,
        appLink: 'https://samanthasamarua.github.io/Online-WorkDay_Scheduler/',
        repoLink: 'https://github.com/samanthasamarua/Online-WorkDay_Scheduler?tab=readme-ov-file'
      },
      {
        title: 'Weather Dashboard',
        imageSrc: WeatherDashboard,
        appLink: 'https://samanthasamarua.github.io/Weather-Dashboard/',
        repoLink: 'https://github.com/samanthasamarua/Weather-Dashboard'
      },
      {
        title: 'Express.js Note Taker',
        imageSrc: NoteTaker,
        appLink: 'https://express-js-notetaker-ss-f712381bee8f.herokuapp.com/',
        repoLink: 'https://github.com/samanthasamarua/Express.js_Note_Taker'
      },
      {
        title: 'PWA Text Editor',
        imageSrc: TextEditor,
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
            _hover={{ bg: 'lightBlue' }} 
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
