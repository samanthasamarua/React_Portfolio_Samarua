import React from 'react';
import { Box, Flex, Heading, Text, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" bg="#3A3840" color="white" py={4}>
      <Flex direction="column" align="center" maxW="1000px" mx="auto">
        <Flex>
          <Link
            href="https://github.com/developer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            fontSize="80px" // Increased icon size
            mr={15}
          >
            <FaGithub />
          </Link>
          <Link
            href="https://linkedin.com/in/developer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            fontSize="80px" // Increased icon size
            mr={15}
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://instagram.com/developer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            fontSize="80px" // Increased icon size
            mr={15}
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://facebook.com/developer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            fontSize="80px" // Increased icon size
          >
            <FaFacebook />
          </Link>
        </Flex>
        <Flex justify="center" mt={4}>
          <Text>© Samantha Samarua 2024</Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Footer;
