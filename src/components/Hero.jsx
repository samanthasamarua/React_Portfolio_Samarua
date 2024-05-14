import React from 'react';
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Flex className="hero-section" align="center" justify="space-between" bg="#D0D5CB" py={8} px={4} borderRadius="lg">
      <Box maxW="50%"> {/* Adjusted maxW value */}
        <Heading as="h2" size="lg" fontFamily="sans-serif" fontWeight="bold">Hello, I'm Samantha Samarua</Heading>
        <Text mt={2} fontFamily="serif">An aspiring full stack developer</Text>
        <Text fontFamily="serif">in Australia</Text>
        <Heading as="h3" size="md" mt={4} color="teal.500">Hire Me</Heading>
        <Button mt={4} colorScheme="teal">Contact</Button>
      </Box>
      <Box maxW="40%">
        <img src="/assets/sam.png" alt="Profile" className="profile-picture" style={{ width: '100%', height: 'auto' }} />
      </Box>
    </Flex>
  );
}

export default Hero;
