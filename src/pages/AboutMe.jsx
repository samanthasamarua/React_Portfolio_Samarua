import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const AboutMe = () => {
  return (
    <Flex className="about-section" align="center" justify="center" bg="#F3F4F6" py={8} px={4} borderRadius="lg">
      <Box maxW="30%">
        <img src="./assets/Samantha.png" alt="Profile" style={{ width: '100%', borderRadius: '50%' }} />
      </Box>
      <Box maxW="60%" pl={8} >
        <Heading as="h2" fontSize="50px" fontFamily="Agbalumo" fontWeight="bold" mb={4}>ABOUT ME</Heading> 
        <Text fontFamily="serif" fontSize="25px">
        As a full-stack developer with a unique background in geology, I bring a diverse set of skills and perspectives to the world of software development. My journey in geology has honed my analytical abilities, problem-solving mindset, and keen attention to detail. Moreover, my experience has underscored the importance of effective communication, a skill I continue to refine in my current role.
        <b/>
        <b/>
        <p>Driven by a passion for learning and a thirst for new challenges, I am an aspiring junior full-stack developer eager to expand my skill set and gain valuable experiences in the ever-evolving tech industry. With a commitment to continuous improvement and a penchant for innovation, I am excited to embark on this journey of growth and discovery.
        </p>
        </Text>
      </Box>
    </Flex>
  );
}

export default AboutMe;
