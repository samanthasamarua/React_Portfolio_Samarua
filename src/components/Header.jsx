import React from 'react';
import { Link as RouterLink } from 'react-router-dom'; 
import { Link, List, ListItem, Flex, Heading, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, useBreakpointValue } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const fontSize = useBreakpointValue({ base: '1rem', md: '1.3rem' }); // Adjust font size based on breakpoint

  return (
    <div className="navbar-container" style={{ backgroundColor: '#3A3840' }}>
      <Flex justify="space-between" alignItems="center" py={4}>
        {/* Name on the left */}
        <Heading size="md" marginLeft="8" fontWeight="semibold" fontFamily="Agbalumo" color="white" fontSize={['25px', null, '3rem']}>
          Samantha Samarua
        </Heading>
        
        {/* Navigation links on the right */}
        <Flex alignItems="center">
          <List display={{ base: 'none', md: 'flex' }} alignItems="center"> {/* Hide list on small screens */}
            <ListItem marginRight="8">
              <Link
                as={RouterLink} // Use RouterLink as the rendered component
                to="/AboutMe" // Specify the route path
                _hover={{ color: 'teal.300' }}
                _activeLink={{ color: 'white' }}
                fontWeight='bold'
                fontSize='lg'
                style={{ color: 'white', fontSize }} // Apply styles
              >
                About Me
              </Link>
            </ListItem>
            <ListItem marginRight="8">
              <Link
                as={RouterLink}
                to="/portfolio"
                _hover={{ color: 'teal.300' }}
                _activeLink={{ color: 'white' }}
                fontWeight='bold'
                fontSize='lg'
                style={{ color: 'white', fontSize }}
              >
                Portfolio
              </Link>
            </ListItem>
            <ListItem marginRight="8">
              <Link
                as={RouterLink}
                to="/contact"
                _hover={{ color: 'teal.300' }}
                _activeLink={{ color: 'white' }}
                fontWeight='bold'
                fontSize='lg'
                style={{ color: 'white', fontSize }}
              >
                Contact
              </Link>
            </ListItem>
            <ListItem marginRight="8">
              <Link
                as={RouterLink}
                to="/resume"
                _hover={{ color: 'teal.300' }}
                _activeLink={{ color: 'white' }}
                fontWeight='bold'
                fontSize='lg'
                style={{ color: 'white', fontSize }}
              >
                Resume
              </Link>
            </ListItem>
          </List>

          {/* Hamburger menu icon for mobile */}
          <IconButton 
            icon={<GiHamburgerMenu size="1.5em" />} // Adjust size here
            variant="ghost" 
            color="white" // Set the color to white
            aria-label="Menu"
            onClick={onOpen}
            display={{ base: 'block', md: 'none' }} // Show on small screens
          />
        </Flex>
      </Flex>

      {/* Drawer for mobile navigation */}
      <Drawer isOpen={isOpen} placement="dropdown" onClose={onClose}><DrawerOverlay />
        <DrawerContent bg="#F3F4F6">
            <DrawerCloseButton />
                <DrawerBody>
                    <List styleType="none">
                        <ListItem>
                        <Link as={RouterLink} to="/AboutMe" fontSize="50px">
                            About Me
                        </Link>
                        </ListItem>
                        <ListItem>
                        <Link as={RouterLink} to="/portfolio" fontSize="50px">
                            Portfolio
                        </Link>
                        </ListItem>
                        <ListItem>
                        <Link as={RouterLink} to="/contact" fontSize="50px">
                            Contact
                        </Link>
                        </ListItem>
                        <ListItem>
                        <Link as={RouterLink} to="/resume" fontSize="50px">
                            Resume
                        </Link>
                        </ListItem>
                    </List>
                </DrawerBody>
        </DrawerContent>
    </Drawer>

    </div>
  );
}

export default Header;
