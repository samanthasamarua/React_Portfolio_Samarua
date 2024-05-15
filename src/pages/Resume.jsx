import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Resume = () => {
  return (
    <Box bg="#F3F4F6" p={4}>
      <Box textAlign="center" mb={8} bg="#F3F4F6">
        <Heading as="h1" size="xl" mb={4}>Resume</Heading>
        <Text fontSize="lg">Explore my skills and experience.</Text>
      </Box>
      
      <Box bg="#F3F4F6" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} boxShadow="md" mb={8}>
        <Heading as="h2" size="lg" mb={4} textAlign="center">Frontend Experience</Heading>
        <ul>
          <li>
            <Text textAlign="center">HTML</Text>
          </li>
          <li>
            <Text textAlign="center">CSS</Text>
          </li>
          <li>
            <Text textAlign="center">JavaScript</Text>
          </li>
          <li>
            <Text textAlign="center">JQuery</Text>
          </li>
          <li>
            <Text textAlign="center">Responsive Design</Text>
          </li>
          <li>
            <Text textAlign="center">React</Text>
          </li>
          <li>
            <Text textAlign="center">Bootstrap</Text>
          </li>
        </ul>
      </Box>

      <Box bg="#F3F4F6" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} boxShadow="md">
        <Heading as="h2" size="lg" mb={4} textAlign="center">Backend Experience</Heading>
        <ul>
          <li>
            <Text textAlign="center">APIs</Text>
          </li>
          <li>
            <Text textAlign="center">Node</Text>
          </li>
          <li>
            <Text textAlign="center">Express</Text>
          </li>
          <li>
            <Text textAlign="center">MySQL, Sequelize</Text>
          </li>
          <li>
            <Text textAlign="center">MongoDB, Mongoose</Text>
          </li>
          <li>
            <Text textAlign="center">REST</Text>
          </li>
          <li>
            <Text textAlign="center">GraphQL</Text>
          </li>
        </ul>
      </Box>
    </Box>
  );
}

export default Resume;
