import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Textarea,
  InputGroup,
  InputRightElement,
  IconButton,
  useDisclosure,
  VStack,
  Text,
  Image,
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import micImage from "../assets/mic2.jpg";
import { useForm } from "react-hook-form";
import { Resizable } from "react-resizable";
import "react-resizable/css/styles.css";

const Chatbot = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [typedMessage, setTypedMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [listening, setListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  const handleInputChange = (e) => setTypedMessage(e.target.value);

  // Rest of your methods and useEffect hooks remain unchanged

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
        <Resizable
          width={400}
          height={Infinity}
          minConstraints={[300, Infinity]}
          maxConstraints={[800, Infinity]}
          handle={<span className="custom-handle" />}
        >
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Chat with our AI</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} align="stretch">
                {chatHistory.map((chat, index) => (
                  <Box
                    key={index}
                    alignSelf={chat.sentByUser ? "flex-end" : "flex-start"}
                  >
                    <Text color={chat.sentByUser ? "blue.500" : "gray.500"}>
                      {chat.message}
                    </Text>
                  </Box>
                ))}
              </VStack>
            </DrawerBody>
            <DrawerFooter borderTopWidth="1px">
              <form onSubmit={handleSubmit(() => {})}>
                <InputGroup>
                  <Textarea
                    variant="outline"
                    placeholder="Type here..."
                    size="md"
                    resize="vertical"
                    mr={3}
                    value={typedMessage}
                    onChange={handleInputChange}
                    minH="100px"
                    maxH="200px"
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={() => setListening(!listening)}
                    >
                      <Image
                        src={micImage}
                        boxSize="20px"
                        color={listening ? "red.500" : "gray.500"}
                      />
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Button
                  colorScheme="red"
                  onClick={() => setChatHistory([])}
                  mr={2}
                >
                  Clear Chat
                </Button>
                <Button colorScheme="blue" type="submit">
                  Send
                </Button>
              </form>
            </DrawerFooter>
          </DrawerContent>
        </Resizable>
      </Drawer>
      <style jsx>{`
        .custom-handle:before {
          content: "";
          position: absolute;
          top: 0;
          left: -10px;
          height: 100%;
          width: 20px;
          cursor: ew-resize;
        }
      `}</style>
    </>
  );
};

export default Chatbot;
