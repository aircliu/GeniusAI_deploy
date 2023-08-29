import React, { useState, useEffect } from "react";

import {
  IconButton,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  List,
  ListItem,
  Heading,
  Flex,
  Text,
  useDisclosure,
  Collapse,
  Box,
  Link,
  Image,
} from "@chakra-ui/react";

import {
  HamburgerIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";

import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

import { Backend } from "../utils/utils";
import geniusAI from "../assets/geniusAI.png";

const MenuHeader = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isOpenCourses, onToggle: onToggleCourses } = useDisclosure();

  const [isPythonHovered, setIsPythonHovered] = useState(false); // State to track hover for "Introduction to Programming With Python"
  const [isLogoHovered, setIsLogoHovered] = useState(false); // State to track hover for "GenuisAI"
  const [isLeetcodeHovered, setIsLeetcodeHovered] = useState(false); // State to track hover for "LeetCode Mastery"
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    const getLoginInfo = async () => {
      const result = await Backend.get("/api/login-info");
      setLoggedInUser(result.data.user);
    };
    getLoginInfo();
  });

  const handleLogoClick = () => {
    navigate("/landing"); // Navigate to the landing page
    onClose();
  };

  const handlePythonClick = () => {
    navigate("/python"); // Navigate to the Python page
    onClose();
  };

  const handleLeetcodeClick = () => {
    navigate("/leetcode"); // Navigate to the LeetCode page
    onClose();
  };

  const handlePythonMouseEnter = () => {
    setIsPythonHovered(true); // Set isPythonHovered to true on mouse enter
  };

  const handlePythonMouseLeave = () => {
    setIsPythonHovered(false); // Set isPythonHovered to false on mouse leave
  };

  const handleLogoMouseEnter = () => {
    setIsLogoHovered(true); // Set isLogoHovered to true on mouse enter
  };

  const handleLogoMouseLeave = () => {
    setIsLogoHovered(false); // Set isLogoHovered to false on mouse leave
  };

  const handleLeetcodeMouseEnter = () => {
    setIsLeetcodeHovered(true); // Set isLeetcodeHovered to true on mouse enter
  };

  const handleLeetcodeMouseLeave = () => {
    setIsLeetcodeHovered(false); // Set isLeetcodeHovered to false on mouse leave
  };

  const handleLogout = () => {
    navigate("/login");
    onClose();
  };

  return (
    <Flex
      as="nav"
      justifyContent="space-between"
      alignItems="center"
      bg="black"
      color="blue.500"
      position="fixed"
      width="100%"
      zIndex={1}
      top={0}
      left={0}
      borderBottomColor="blue.500"
      borderBottomWidth={1}
      padding={3}
    >
      <Image
        src={geniusAI}
        cursor="pointer"
        boxSize="11%"
        onClick={handleLogoClick}
        onMouseEnter={handleLogoMouseEnter} // Handle mouse enter event for "GenuisAI"
        onMouseLeave={handleLogoMouseLeave} // Handle mouse leave event for "GenuisAI"
      />
      <IconButton
        icon={<HamburgerIcon color="white" />} // Set the icon color to white
        onClick={onOpen}
        isRound={true}
        alignSelf="center"
        size="md"
        colorScheme="blue" // The color scheme is set to blue
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        color="blue.500"
        bg="black"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            onClick={handleLogoClick}
            style={{ cursor: "pointer" }}
            bg="black"
            color="blue.500"
          >
            GeniusAI
          </DrawerHeader>

          <DrawerBody bg="black">
            <List spacing={3} color="blue.500">
              <ListItem>
                <Flex align="center">
                  <Heading size="md">Courses</Heading>
                  <Box as="button" ml={2} onClick={onToggleCourses}>
                    {isOpenCourses ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </Box>
                </Flex>
                <Collapse in={isOpenCourses}>
                  <List mt={2}>
                    <ListItem
                      onClick={handlePythonClick}
                      fontWeight={isPythonHovered ? "bold" : "normal"} // Set font weight based on isPythonHovered state
                      onMouseEnter={handlePythonMouseEnter} // Handle mouse enter event for "Introduction to Programming With Python"
                      onMouseLeave={handlePythonMouseLeave} // Handle mouse leave event for "Introduction to Programming With Python"
                      style={{ cursor: "pointer" }}
                    >
                      Introduction to Programming With Python
                    </ListItem>
                    {/* <ListItem
                      onClick={handleLeetcodeClick}
                      fontWeight={isLeetcodeHovered ? "bold" : "normal"} // Set font weight based on isLeetcodeHovered state
                      onMouseEnter={handleLeetcodeMouseEnter} // Handle mouse enter event for "LeetCode Mastery"
                      onMouseLeave={handleLeetcodeMouseLeave} // Handle mouse leave event for "LeetCode Mastery"
                      style={{ cursor: "pointer" }}
                    >
                      LeetCode Mastery
                    </ListItem> */}
                  </List>
                </Collapse>
              </ListItem>
            </List>
          </DrawerBody>
          <DrawerFooter bg="black" color="blue.500">
            <Text>Currently logged in as: {loggedInUser}</Text>
            <Button colorScheme="red" onClick={handleLogout}>
              Logout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default MenuHeader;
