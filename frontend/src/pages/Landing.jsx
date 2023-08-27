import React, { useEffect, useState } from "react";
import {
  Spacer,
  Center,
  Box,
  Text,
  Flex,
  VStack,
  Button,
  Card,
  Heading,
} from "@chakra-ui/react";

import MenuHeader from "../components/MenuHeader";
import SiteCard from "../components/SiteCard";
import { Backend } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Landing = () => {
  const navigate = useNavigate();
  const [fadeInStartingPage, setFadeInStartingPage] = useState(true);
  const [fadeInHeading, setFadeInHeading] = useState(false);
  const [fadeInContent, setFadeInContent] = useState(false);
  const [fadeInFooter, setFadeInFooter] = useState(false);

  useEffect(() => {
    const timerStartingPage = setTimeout(() => {
      setFadeInStartingPage(false);
      setFadeInHeading(true);
    }, 1000);

    const timerHeading = setTimeout(() => {
      setFadeInHeading(false);
      setFadeInContent(true);
    }, 1500);

    const timerFooter = setTimeout(() => {
      setFadeInFooter(true);
    }, 2000);

    return () => {
      clearTimeout(timerStartingPage);
      clearTimeout(timerHeading);
      clearTimeout(timerFooter);
    };
  }, []);

  const handlePythonClick = () => {
    navigate("/python");
  };

  const handleLeetcodeClick = () => {
    navigate("/leetcode");
  };

  return (
    <Flex
      direction="column"
      p="2rem 5rem 5rem"
      bgColor="black"
      bgRepeat="no-repeat"
      bgSize="cover"
      justifyContent="center"
      alignSelf="center"
    >
      <MenuHeader />
      <Text
        fontSize={["md", "lg", "xl", "2xl"]}
        alignSelf="center"
        opacity={fadeInStartingPage ? 1 : 0}
        transition="opacity 1s ease-in-out"
        color="blue.500"
        bottom="26vw"
        position="fixed"
      >
        GeniusAI
      </Text>
      <Flex
        justifyContent="center"
        alignItems="center"
        mt={20}
        direction="column"
        opacity={fadeInContent ? 1 : 0}
        transition="opacity 1s ease-in"
        style={{ transitionDelay: fadeInContent ? "1s" : "0s" }}
      >
        <Heading as="h1" size="xl" mb={1} color="white">
          <Text textAlign="center">Introducing </Text>
          <Text textAlign="center">GeniusAI</Text>
        </Heading>
        <Text fontSize="md" fontStyle="italic" color="white" mb={10}>
          Changing the way people learn with AI
        </Text>
        <SiteCard mb={10} w="70vw" justifyContent="center">
          <VStack spacing={4} alignItems="flex-start">
            <Heading as="h2" size="lg" mb={4} color="blue.500">
              Learning Python with GeniusAI
            </Heading>
            <Text color="blue.500">
              Embark on a Python programming journey with our introductory
              course. Learn essential concepts, syntax, and problem-solving
              techniques to confidently write code. Bring your ideas to life and
              unleash the power of Python in just a few lessons
            </Text>
            <Button
              mt={4}
              colorScheme="blue"
              variant="solid"
              onClick={handlePythonClick}
            >
              Get Started
            </Button>
          </VStack>
        </SiteCard>
        <SiteCard mb={10} w="70vw" justifyContent="center">
          <VStack spacing={4} alignItems="flex-start">
            <Heading as="h2" size="lg" mb={4} color="blue.500">
              Leetcode Mastery
            </Heading>
            <Text color="blue.500">
              Explore the world of coding challenges with our LeetCode course.
              Enhance your problem-solving skills as you tackle a wide range of
              algorithmic problems and data structures. Prepare yourself for
              coding interviews and unleash your potential with our
              comprehensive LeetCode training.
            </Text>
            <Button
              mt={4}
              colorScheme="blue"
              variant="solid"
              onClick={handleLeetcodeClick}
            >
              Get Started
            </Button>
          </VStack>
        </SiteCard>
        <Center mt={10} direction="column" width="full">
          <Flex direction="column" alignItems="center">
            <Heading as="h2" size="lg" color="blue.500" textAlign="center">
              Try GeniusAI Free Today!
            </Heading>
            <Button
              mt={4}
              colorScheme="blue"
              variant="solid"
              onClick={handlePythonClick}
            >
              Try it today for free!
            </Button>
          </Flex>
        </Center>
      </Flex>
      <Spacer mb={20} />
      <Footer fadeTime={2500} />
    </Flex>
  );
};

export default Landing;
