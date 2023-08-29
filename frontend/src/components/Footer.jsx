import React, { useState, useEffect } from "react";
import { Flex, Link, Text, Divider, SimpleGrid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Footer = ({ opacity = 1, transition, style, fadeTime }) => {
  const navigate = useNavigate();

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, fadeTime);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Flex
      as="footer"
      py={6}
      justify="space-between"
      align="center"
      direction="column"
      bg="black"
      borderTopWidth="1px"
      borderTopColor="blue.500"
      opacity={fadeIn ? 1 : 0}
      transition="opacity 1s ease-in-out"
    >
      <Text
        color="white"
        fontWeight="bold"
        onClick={() => navigate("/")}
        cursor="pointer"
        my={{ base: 2, md: 0 }}
      >
        GeniusAI
      </Text>
      <Text color="gray.400">Created by Eric and Ostend</Text>
      <Divider
        orientation="vertical"
        borderColor="blue.500"
        height="20px"
        my={{ base: 2, md: 0 }}
      />
      <SimpleGrid columns={2} spacing={10} rowGap={1} ml={5}>
        <Link href="https://github.com/aircliu" isExternal color="white" mb={1}>
          <Text>Eric's Github</Text>
        </Link>
        <Link
          href="https://github.com/Aokijiop"
          isExternal
          color="white"
          mb={1}
          ml={4}
        >
          <Text>Ostend's Github</Text>
        </Link>
        <Link
          href="https://www.linkedin.com/in/aircliu/"
          isExternal
          color="white"
        >
          <Text>Eric's Linkedin</Text>
        </Link>
        <Link
          href="https://www.linkedin.com/in/ostend-suryajaya/"
          isExternal
          color="white"
          ml={4}
        >
          <Text>Ostend's LinkedIn</Text>
        </Link>
      </SimpleGrid>
    </Flex>
  );
};

export default Footer;
