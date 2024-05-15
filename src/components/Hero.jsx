import React from 'react';
import { Box, Flex, Heading, Text, Button, Avatar, useBreakpointValue } from '@chakra-ui/react';

const Hero = () => {
  const textWidth = useBreakpointValue({ base: "100%", sm: "30%" }); // Adjust text width based on breakpoint
  const imageWidth = useBreakpointValue({ base: "100%", sm: "40%" }); // Adjust image width based on breakpoint

  return (
    <Flex className="hero-section" align="center" justify="center" bg="#D0D5CB" py={8} px={4} borderRadius="lg" flexWrap="wrap"> {/* Added flexWrap="wrap" */}
     
      <Box maxW={textWidth} textAlign="center" mb={{ base: 4, sm: 0 }} mr={{ base: 0, sm: 8 }}> {/* Adjusted margins and width based on breakpoint */}
        <Heading as="h2" size="lg" fontFamily="sans-serif" fontWeight="bold">Hello</Heading>
        <Text mt={2} size="md" fontFamily="serif">An aspiring full stack developer</Text>
        <Text fontFamily="serif">in Australia</Text>
        <Heading as="h3" size="md" mt={4} color="teal.500">Hire Me</Heading>
        <Button mt={4} colorScheme="teal">Contact</Button>
      </Box>
      
      <Box maxW={imageWidth} textAlign="center">
        <Avatar size={{ base: "xl", sm: "3xl" }} src="./assets/Samantha.png" name="Samantha Samarua" /> {/* Adjusted avatar size based on breakpoint */}
      </Box>

    </Flex>
  );
}

export default Hero;
