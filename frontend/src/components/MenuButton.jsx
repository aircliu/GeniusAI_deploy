import React from 'react';
import { IconButton, List, ListItem, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Heading, Collapse, useDisclosure, Box } from '@chakra-ui/react';
import { HamburgerIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const MenuButton = () => {
  const btnRef = React.useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isOpenCourses, onToggle: onToggleCourses } = useDisclosure()

  return (
    <>
      <IconButton
        icon={<HamburgerIcon />}
        onClick={onOpen}
        isRound={true}
        size="md"
        display={isOpen ? 'none' : 'flex'}
        position="absolute"
        left="5vw"
        top="5vh"
      />

      <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader p="5vh">GenuisAI</DrawerHeader>

            <DrawerBody>
              <List spacing={3}>
                <ListItem onClick={onToggleCourses} cursor="pointer">
                  <Box display="flex" alignItems="center">
                    <Heading size="md">Courses</Heading>
                    {isOpenCourses ? <ChevronUpIcon boxSize={6} /> : <ChevronDownIcon boxSize={6} />}
                  </Box>
                  <Collapse in={isOpenCourses}>
                    <List mt={2}>
                      <ListItem>Introduction to Programming With Python</ListItem>
                      <ListItem>LeetCode Mastery</ListItem>
                    </List>
                  </Collapse>
                </ListItem>
              </List>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  };
  
  export default MenuButton;
