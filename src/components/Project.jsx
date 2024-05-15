import React from 'react';
import { Box, Image, Heading, Flex, Link } from '@chakra-ui/react';

const Project = ({ title, imageSrc, appLink, repoLink }) => {
  return (
    <Box borderWidth="5px" borderRadius="lg" overflow="hidden" p={4} boxShadow="md">
      <Box maxW="500px" maxH="400px" mx="auto"> {/* Set max width and max height for the image */}
        <Image src={imageSrc} alt={title} />
      </Box>
      <Heading mt={2} size="md" textAlign="center">
        {title}
      </Heading>
      <Flex justify="center" mt={2}>
        <Link href={appLink} isExternal color="teal.500" mr={4}>
          View App
        </Link>
        <Link href={repoLink} isExternal color="teal.500">
          GitHub Repo
        </Link>
      </Flex>
    </Box>
  );
}

export default Project;
