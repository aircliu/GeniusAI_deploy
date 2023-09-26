import React, { useState, useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Text,
  Button,
  Textarea,
  IconButton,
  InputGroup,
  InputRightElement,
  VStack,
  Box,
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";

const Chatbot = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [drawerWidth, setDrawerWidth] = useState(400);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
    setDrawerWidth(isExpanded ? 400 : 800);
  };

  return (
    <>
      <IconButton
        icon={<ChatIcon />}
        ref={btnRef}
        onClick={onOpen}
        position="fixed"
        bottom="30px"
        right="30px"
        isRound="true"
        colorScheme="blue"
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent w={drawerWidth + "px"}>
          <DrawerCloseButton />
          <DrawerHeader>Chat with our AI</DrawerHeader>
          <DrawerBody>
            <Button onClick={toggleExpansion} mx="auto" my={2}>
              {isExpanded ? "Shrink" : "Expand"}
            </Button>
            {/* Your chat elements here */}
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            {/* Your input and send button here */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Chatbot;
