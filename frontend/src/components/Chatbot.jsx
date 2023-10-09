import React, { useEffect, useState } from 'react';
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
} from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';

import micImage from '../assets/mic2.jpg'; // import the image here
import { Backend } from '../utils/utils';

import { useForm } from 'react-hook-form';

const Chatbot = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [typedMessage, setTypedMessage] = useState(''); // For typed input
  const [chatHistory, setChatHistory] = useState([]);
  const [listening, setListening] = useState(false);
  const [recognition, setRecognition] = useState(null); // Speech recognition instance

  const handleInputChange = (e) => {
    setTypedMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    try {
      const response = await Backend.post('/api/chatbot', { message: typedMessage });

      // Add user's message to chat history
      setChatHistory((prev) => [...prev, { message: typedMessage, sentByUser: true }]);

      // If successful response, add AI's message to chat history
      if (response.data.message) {
        setChatHistory((prev) => [...prev, { message: response.data.message, sentByUser: false }]);
      }
    } catch (err) {
      console.error("Error sending message:", err);
    }

    setTypedMessage(''); // clear the typed input
    reset(); // clear the form
    setListening(false); // stop microphone

    recognition && recognition.stop(); // Stop speech recognition after sending message
  };

  const handleClearChat = () => {
    setChatHistory([]); // clear chat history
  };

  useEffect(() => {
    let newRecognition;
    if ('webkitSpeechRecognition' in window) {
      newRecognition = new window.webkitSpeechRecognition();
      newRecognition.continuous = true;
      newRecognition.interimResults = false; // Only get the final result

      newRecognition.onstart = function () {
        setListening(true);
      };

      newRecognition.onresult = function (event) {
        var transcript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          transcript += event.results[i][0].transcript;
        }
        setTypedMessage((prevTypedMessage) => prevTypedMessage + ' ' + transcript); // Update typedMessage state
      };

      newRecognition.onerror = function (event) {
        setListening(false);
      };

      newRecognition.onend = function () {
        setListening(false);
        if (listening) {
          newRecognition.start();
        }
      };
    } else {
      console.error('Browser does not support speech recognition.');
    }

    setRecognition(newRecognition);

    return function cleanup() {
      if (newRecognition) {
        newRecognition.stop();
      }
    };
  }, []); // Empty dependency array to run once on component mount

  useEffect(() => {
    if (recognition) {
      if (listening) {
        recognition.start();
      } else {
        recognition.stop();
      }
    }
  }, [listening, recognition]);

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

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Chat with our AI</DrawerHeader>

          <DrawerBody>
            <VStack spacing={4} align="stretch">
              {chatHistory.map((chat, index) => (
                <Box key={index} alignSelf={chat.sentByUser ? 'flex-end' : 'flex-start'}>
                  <Text color={chat.sentByUser ? 'blue.500' : 'gray.500'}>{chat.message}</Text>
                </Box>
              ))}
            </VStack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <form onSubmit={handleSubmit(handleSendMessage)}>
              <InputGroup>
                <Textarea
                  variant="outline"
                  placeholder="Type here..."
                  size="md"
                  resize="vertical"
                  mr={3}
                  value={typedMessage} // the 'typedMessage' state is assigned as value
                  onChange={handleInputChange} // update 'typedMessage' state while typing
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={() => setListening(!listening)}>
                    <Image src={micImage} boxSize="20px" color={listening ? 'red.500' : 'gray.500'} />
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Button colorScheme="red" onClick={handleClearChat}>
                Clear Chat
              </Button>
              <Button colorScheme="blue" type="submit">
                Send
              </Button>
            </form>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Chatbot;