import React from 'react';
import { Box, Flex,Text, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" bg="#3A3840" color="white" py={4}>
      <Flex direction="column" align="center" maxW="1000px" mx="auto">
        <Flex>
          <Link
            href="https://github.com/samanthasamarua"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            fontSize="80px" // Increased icon size
            mr={15}
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/samantha-samarua-b84019b2/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            fontSize="80px" // Increased icon size
            mr={15}
          >
            <FaLinkedin />
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
