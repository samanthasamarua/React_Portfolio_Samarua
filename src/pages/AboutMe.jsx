import React from 'react';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';

const AboutMe = () => {
  return (
    <Flex className="about-section" direction={{ base: 'column', md: 'row' }} align="center" justify="center" bg="#F3F4F6" py={8} px={4} borderRadius="lg">
      <Box maxW={{ base: '100%', md: '30%' }} mb={{ base: 4, md: 0 }}>
        <Image src="./src/assets/Samantha.png" alt="Profile" borderRadius="full" />
      </Box>
      <Box maxW={{ base: '100%', md: '60%' }} pl={{ base: 0, md: 8 }}>
        <Heading as="h2" fontSize={{ base: '2xl', md: '4xl' }} fontFamily="Agbalumo" fontWeight="bold" mb={4}>ABOUT ME</Heading> 
        <Text fontFamily="serif" fontSize={{ base: 'lg', md: 'xl' }}>
          As a full-stack developer with a unique background in geology, I bring a diverse set of skills and perspectives to the world of software development. My journey in geology has honed my analytical abilities, problem-solving mindset, and keen attention to detail. Moreover, my experience has underscored the importance of effective communication, a skill I continue to refine in my current role.
          <br/><br/>
          Driven by a passion for learning and a thirst for new challenges, I am an aspiring junior full-stack developer eager to expand my skill set and gain valuable experiences in the ever-evolving tech industry. With a commitment to continuous improvement and a penchant for innovation, I am excited to embark on this journey of growth and discovery.
        </Text>
      </Box>
    </Flex>
  );
}

export default AboutMe;
