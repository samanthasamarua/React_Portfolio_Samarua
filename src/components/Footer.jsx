import React from 'react';
import { Box, Flex, Heading, IconButton, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" bg="#3A3840" color="white" py={4}>
      <Flex direction="column" align="center" maxW="960px" mx="auto">
        <Heading as="h2" size="lg" mb={4}>Samantha Samarua</Heading>
        <Flex>
          <IconButton
            as="a"
            href="https://github.com/developer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            icon={<FaGithub />}
            color="white"
            variant="ghost"
            mr={4}
          />
          <IconButton
            as="a"
            href="https://linkedin.com/in/developer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            color="white"
            variant="ghost"
          />
        </Flex>
        <Flex justify="center" mt={4}>
          <Text>© 2024</Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Footer;
