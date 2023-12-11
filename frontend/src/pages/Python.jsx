import React from "react";
import MenuHeader from "../components/MenuHeader";
import { useNavigate } from "react-router-dom";
import Handtracker from "../utils/HandTracker";
import {
  Flex,
  Box,
  Text,
  VStack,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Code,
  Divider,
  Image,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  HStack,
} from "@chakra-ui/react";

import LessonCard from "../components/LessonCard";
import pythonLogo from "../assets/python_logo.png";
import trophy from "../assets/trophy.svg";
import code from "../assets/code.svg";
import barbell from "../assets/barbell.svg";
import setup from "../assets/pythonSetup.jpg";
import fundamentals from "../assets/fundamentals.gif";
import controlFlow from "../assets/conditionals.gif";
import background from "../assets/background.png";
import functions from "../assets/functions.gif";
import oop from "../assets/oop.png";
import modules from "../assets/modules.gif";

import SiteCard from "../components/SiteCard";

const courseHighlights = [
  "You will learn how to leverage the power of Python to solve tasks.",
  "You will build games and programs that use Python libraries.",
  "You will be able to use Python for your own work problems or personal projects.",
  "You will create a portfolio of Python-based projects you can share.",
  "Learn to use Python professionally, learning both Python 2 and Python 3!",
  "Create games with Python, like Tic Tac Toe and Blackjack!",
  "Learn advanced Python features, like the collections module and how to work with timestamps!",
  "Learn to use Object Oriented Programming with classes!",
  "Understand complex topics, like decorators.",
  "Understand how to use both the Jupyter Notebook and create .py files.",
  "Get an understanding of how to create GUIs in the Jupyter Notebook system!",
  "Build a complete understanding of Python from the ground up!",
];

// const CourseItem = ({src, text}) => (
//   <ListItem>
//     <Flex alignItem="center">
//       <Image src={src} w="25px" h="25px" marginRight="1em" />
//       {text}
//     </Flex>
//   </ListItem>
// );

// const courseIncludes = [
//     {src: trophy, text: "22 hours on-demand video"},
//     {src: code, text: "19 coding exercises!"},
//     {src: barbell, text: "Develop Strong Programming Fundamentals"},
// ]

const Python = () => {
  const navigate = useNavigate();

  const handlePrediction = (gesture) => {
    console.log('Detected Gesture:', gesture);
    if (gesture === 'Open Hand') {
      navigate('/python-setup');
    } else if (gesture === 'Close Hand') {
      navigate('/landing')
    } else if (gesture === 'Hand Pointing'){
      navigate('/landing')
    } else if (gesture === 'Two Hands Pinching') {
      navigate('/login')
    } else if (gesture === 'Two Hands Pointing') {
      navigate('/python')
    } else if (gesture === 'Open Linkedin') {
      window.location.href = 'https://www.linkedin.com/in/aircliu/';
    } else if (gesture === 'Open Github') {
      window.location.href = 'https://github.com/Aokijiop';
    }
    
    // You can perform additional actions based on the detected gesture
  };
  return (
    <Box bgColor="black" paddingBottom={20} overflow="hidden">
      <Flex
        direction="column"
        p={{ base: "5rem 1rem", md: "20vh 5rem 5rem" }}
        bgColor="black"
      >
        <SiteCard mb={10}>
          <Flex
            direction={{ base: "column", md: "row" }}
            align={{ base: "center", md: "flex-start" }}
          >
            <Image
              src={pythonLogo}
              alt="Python Logo"
              w="50px"
              h="50px"
              mb={{ base: 2, md: 0 }}
              mr={{ base: 0, md: 2 }}
            />
            <Heading color="white" textAlign={{ base: "center", md: "left" }}>
              Introduction to Programming with Python
            </Heading>
          </Flex>
          <Text
            fontSize="md"
            fontStyle="italic"
            color="white"
            mb={4}
            overflowWrap="break-word"
          >
            Master the fundamentals of Python programming with our cutting-edge
            AI technology and unleash your creativity to develop your own games
            and applications
          </Text>
          <Divider my={4} borderColor="blue.500" borderWidth="1px" />
          <Text fontSize="md" color="white" overflowWrap="break-word">
            To use our AI, press the chat button on the bottom right!
          </Text>
        </SiteCard>
        <Box w="100%" justifyContent="center">
          <SiteCard mb={10}>
            <Heading size="md" fontWeight="bold" mb={2} color="blue.500">
              Here's what you will be learning in this course
            </Heading>
            <div
              style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
            >
              {courseHighlights.map((highlight, index) => (
                <Text
                  key={index}
                  display="flex"
                  alignItems="center"
                  fontSize="sm"
                  color="blue.500"
                >
                  <span style={{ marginRight: "0.5rem" }}>✓</span> {highlight}
                </Text>
              ))}
            </div>
          </SiteCard>
          <SiteCard mb={10}>
            <Heading size="md" fontWeight="bold" color="blue.500">
              This course will include:
            </Heading>
            <List spacing={2} mt={3}>
              <ListItem color="blue.500">
                <Flex alignItem="center">
                  <Image src={trophy} w="25px" h="25px" mr="1em" />
                  22 hours on-demand video
                </Flex>
              </ListItem>
              <ListItem color="blue.500">
                <Flex alignItems="center">
                  <Image src={code} w="25px" h="25px" mr="1em" />
                  19 coding excercises!
                </Flex>
              </ListItem>
              <ListItem color="blue.500">
                <Flex alightItems="center">
                  <Image src={barbell} w="25px" h="25px" mr="1em" />
                  Develop Strong Programming Fundamentals
                </Flex>
              </ListItem>
            </List>
          </SiteCard>
        </Box>
      </Flex>
      <Flex direction="column" bgColor="black" justifyContent="center">
        <SimpleGrid
          justifyItems="center"
          minChildWidth={{ base: "280px", md: "450px" }}
          rowGap={40}
          p={{ base: "1rem", md: "2rem" }}
        >
          <LessonCard
            title="Python Setup"
            imageSrc={setup}
            route="/python-setup"
          />
          <LessonCard
            title="Python Fundamentals"
            imageSrc={fundamentals}
            route="/python-fundamentals"
          />
          <LessonCard
            title="Conditionals and Control Flow"
            imageSrc={controlFlow}
            route="/conditionals-and-control-flow"
          />
          <LessonCard
            title="Functions and Modularization"
            imageSrc={functions}
            route="/functions"
          />
          <LessonCard
            title="Object-Oriented Programming"
            imageSrc={oop}
            route="/object-oriented"
          />
          <LessonCard
            title="Advanced Python Modules"
            imageSrc={modules}
            route="/modules"
          />
          <LessonCard
            title="Mini Project"
            imageSrc={modules}
            route="/project"
          />
        </SimpleGrid>
      </Flex>
      <Handtracker onPrediction={handlePrediction} />
    </Box>
  );
};

export default Python;
