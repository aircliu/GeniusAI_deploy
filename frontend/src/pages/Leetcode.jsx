import React from "react";
import MenuHeader from "../components/MenuHeader";
import {
  Flex,
  Box,
  Text,
  Heading,
  Divider,
  Image,
  List,
  ListItem,
  Card,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import leetcode from "../assets/leetcode.png";
import trophy from "../assets/trophy.svg";
import code from "../assets/code.svg";
import barbell from "../assets/barbell.svg";
import typing from "../assets/typing.gif";

import LessonCard from "../components/LessonCard";
import SiteCard from "../components/SiteCard";
import Chatbot from "../components/Chatbot";

import pythonLogo from "../assets/python_logo.png";
import pythonSetup from "../assets/pythonSetup.jpg";
import pythonFundamentals from "../assets/pythonFundamentals.jpg";
import controlFlow from "../assets/controlFlow.png";
import background from "../assets/background.png";

const courseHighlights = [
  "Master problem-solving techniques for Leetcode challenges.",
  "Develop proficiency in solving algorithmic problems using Python.",
  "Learn advanced data structures and algorithms for efficient coding.",
  "Understand common coding patterns and strategies for interviews.",
  "Practice solving a variety of Leetcode problems with detailed explanations.",
  "Gain insights into optimization techniques and trade-offs in algorithms.",
  "Enhance your problem-solving speed and efficiency through coding exercises.",
  "Build a strong foundation in problem-solving skills for coding interviews.",
];

const courseIncludes = [
  { src: trophy, text: "22 hours of video lectures" },
  { src: code, text: "19 coding exercises" },
  { src: barbell, text: "Developing Strong Problem-Solving Skills" },
];

const Leetcode = () => {
  return (
    <Box bgColor="black" paddingBottom={20}>
      <Flex direction="column" p="7rem 5rem 5rem" bgColor="black">
        <Box w="100%" justifyContent="center">
          <SiteCard mb={10}>
            <Flex>
              <Image
                src={leetcode}
                alt="Leetcode Logo"
                w="50px"
                h="50px"
                marginRight={2}
              />
              <Heading color="white">Leetcode Mastery</Heading>
            </Flex>
            <Text fontSize="md" fontStyle="italic" color="white" mb={4}>
              Master programming for coding interviews with our cutting-edge AI
              technology and unleash your problem-solving skills to ace Leetcode
              challenges
            </Text>
            <Divider my={4} borderColor="blue.500" borderWidth="1px" />
            <Text color="white">
              To access our AI, click the chat button on the bottom right!
            </Text>
          </SiteCard>
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
            <Flex justifyContent="space-between">
              <Box maxW="600px" flex="1" mt={4}>
                <Heading size="md" fontWeight="bold" mb={4} color="blue.500">
                  This course will include:
                </Heading>
                <List spacing={2}>
                  {courseIncludes.map((include, index) => (
                    <ListItem color="blue.500" key={index}>
                      <Flex alignItems="center">
                        <Image src={include.src} w="25px" h="25px" mr="1em" />
                        {include.text}
                      </Flex>
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Flex justifyContent="center" alignItems="center">
                <Image src={typing} alt="Typing GIF" maxW="100%" />
              </Flex>
            </Flex>
          </SiteCard>
        </Box>
      </Flex>
      <Flex direction="column" bgColor="black">
        <SimpleGrid justifyItems="center" minChildWidth={450} rowGap={40}>
          <LessonCard
            title="Python Setup"
            imageSrc={pythonSetup}
            route="/landing"
          />
          <LessonCard
            title="Python Fundamentals"
            imageSrc={pythonFundamentals}
            route="/landing"
          />
          <LessonCard
            title="Conditionals and Control Flow"
            imageSrc={controlFlow}
            route="/landing"
          />
          <LessonCard
            title="Functions and Modularization"
            imageSrc={pythonSetup}
            route="/landing"
          />
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default Leetcode;
