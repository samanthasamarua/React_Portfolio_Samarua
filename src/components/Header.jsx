import React from 'react';
import { List, ListItem, Flex, Heading, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, useBreakpointValue } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const fontSize = useBreakpointValue({ base: '1rem', md: '1.3rem' }); // Adjust font size based on breakpoint

  return (
    <div className="navbar-container" style={{ backgroundColor: '#3A3840' }}>
      <Flex justify="space-between" alignItems="center" py={4}>
        {/* Name on the left */}
        <Heading size="md" fontWeight="semibold" color="white" fontSize={['1.5rem', null, '2rem']}> {/* Responsive font size */}
          Samantha Samarua
        </Heading>
        
        {/* Navigation links on the right */}
        <Flex alignItems="center">
          <List display="flex" alignItems="center">
            <ListItem marginRight="4">
              <a href="#about" style={{ color: 'white', fontSize }}> {/* Dynamic font size */}
                About
              </a>
            </ListItem>
            <ListItem marginRight="4">
              <a href="#portfolio" style={{ color: 'white', fontSize }}> {/* Dynamic font size */}
                Portfolio
              </a>
            </ListItem>
            <ListItem marginRight="4">
              <a href="#contact" style={{ color: 'white', fontSize }}> {/* Dynamic font size */}
                Contact
              </a>
            </ListItem>
            <ListItem>
              <a href="#resume" style={{ color: 'white', fontSize }}> {/* Dynamic font size */}
                Resume
              </a>
            </ListItem>
          </List>
        </Flex>

        {/* Hamburger menu icon for mobile */}
        <IconButton 
          icon={<GiHamburgerMenu />} 
          variant="ghost" 
          colorScheme="cyan"
          aria-label="Menu"
          onClick={onOpen}
          display={{ base: 'block', md: 'none' }}
        />
      </Flex>

      {/* Drawer for mobile navigation */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <List styleType="none">
              <ListItem><a href="#about">About</a></ListItem>
              <ListItem><a href="#portfolio">Portfolio</a></ListItem>
              <ListItem><a href="#contact">Contact</a></ListItem>
              <ListItem><a href="#resume">Resume</a></ListItem>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Header;
