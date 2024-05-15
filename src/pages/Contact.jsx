import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const AboutMe = () => {
  return (
    <Flex className="about-section" align="center" justify="center" bg="#F3F4F6" py={8} px={4} borderRadius="lg">
      <Box maxW="40%">
        <img src="./assets/Samantha.jpg" alt="Profile" style={{ width: '100%', borderRadius: '50%' }} />
      </Box>
      <Box maxW="60%" pl={8}> {/* Added left padding */}
        <Heading as="h2" size="lg" fontFamily="sans-serif" fontWeight="bold" mb={4}>About Me</Heading> {/* Added margin bottom */}
        <Text fontFamily="serif"> {/* Added text content */}
          I am a passionate and dedicated individual with a strong interest in web development.
          With several years of experience in front-end development, I have expertise in HTML, CSS, and JavaScript.
        </Text>
        <Text fontFamily="serif" mt={4}> {/* Added margin top */}
          My career achievements include creating user-friendly and responsive web applications
          that enhance user experience and achieve business goals.
        </Text>
      </Box>
    </Flex>
  );
}

export default AboutMe;
