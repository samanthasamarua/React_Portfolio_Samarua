import React from 'react';
import { List, ListItem, Flex, Heading, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="navbar-container" style={{ backgroundColor: '#3A3840' }}> {/* Added inline style for background color */}
      <Flex justify="space-between" alignItems="center" py={4}> {/* Added padding on Y-axis for spacing */}
        {/* Name on the left */}
        <Heading size="md" fontWeight="semibold" color="white" style={{ fontSize: '50px' }}> {/* Increased font size */}
          Samantha Samarua
        </Heading>
        
        {/* Navigation links on the right */}
        <Flex alignItems="center">
          <List display="flex" alignItems="center">
            <ListItem marginRight="4">
              <a href="#about" style={{ color: 'white', fontSize: '1.3rem' }}> {/* Adjusted font size and color */}
                About
              </a>
            </ListItem>
            <ListItem marginRight="4">
              <a href="#portfolio" style={{ color: 'white', fontSize: '1.3rem' }}> {/* Adjusted font size and color */}
                Portfolio
              </a>
            </ListItem>
            <ListItem marginRight="4">
              <a href="#contact" style={{ color: 'white', fontSize: '1.3rem' }}> {/* Adjusted font size and color */}
                Contact
              </a>
            </ListItem>
            <ListItem>
              <a href="#resume" style={{ color: 'white', fontSize: '1.3rem' }}> {/* Adjusted font size and color */}
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
          display={{ base: 'block', md: 'none' }} // Show hamburger menu on mobile and tablet, hide on desktop
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
