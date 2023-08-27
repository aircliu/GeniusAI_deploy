import React, { useState } from "react";

import {
  Flex,
  Heading,
  Text,
  Box,
  Divider,
  Card,
  CardBody,
  Code,
  Link,
  UnorderedList,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";

// framer motion
import { motion, AnimatePresence } from "framer-motion";

import MenuHeader from "../../components/MenuHeader";
import SiteCard from "../../components/SiteCard";
import Chatbot from "../../components/Chatbot";
import AnimatedCard from "../../components/NewAnimation"; // import AnimatedCard

const PythonSetup = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <Flex direction="column" p="7rem 5rem 5rem" bgColor="black">
      <SiteCard mb={10}>
        <Heading color="white" mb={1}>
          Lesson 1: Python Setup
        </Heading>
        <Text fontSize="md" fontStyle="italic" color="white" mb={4}>
          Get started with the essentials you'll need to know to setup Python!
          <Divider my={4} borderColor="blue.500" borderWidth="1px" />
          To use our AI, press the chat button on the bottom right!
        </Text>
      </SiteCard>

      <SiteCard mb={10}>
        <Heading size="md" color="white">
          Checking if you already have Python (Windows):
        </Heading>
        <Divider my={4} borderColor="blue.400" borderWidth="1px" />
        <Card bgColor="gray.800">
          <CardBody>
            <OrderedList>
              <ListItem color="white">
                Open a command-line application such as "Command Prompt" or
                "PowerShell" (Alternatively, you can use{" "}
                <Link
                  color="teal.500"
                  href="https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab"
                >
                  Windows Terminal
                </Link>
                )
              </ListItem>
              <ListItem color="white">
                Within the command line, enter{" "}
                <Code bgColor="gray.600">python --version</Code>
                <UnorderedList>
                  <ListItem>
                    This will allow you to see which Python version is currently
                    installed if applicable. Otherwise, no version of Python
                    will be found
                  </ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem color="white">
                You can use this command to verify your installation of Python
                <UnorderedList>
                  <ListItem>
                    If you see a version less than 3.8.4, you may want to
                    consider reinstalling the latest version of Python
                  </ListItem>
                </UnorderedList>
              </ListItem>
            </OrderedList>
          </CardBody>
        </Card>
      </SiteCard>

      <SiteCard mb={10}>
        <Heading size="md" color="white">
          Checking if you already have Python (macOS and Linux):
        </Heading>
        <Divider my={4} borderColor="blue.400" borderWidth="1px" />
        <Card bgColor="gray.800">
          <CardBody>
            <OrderedList>
              <ListItem color="white">
                Open the terminal
                <UnorderedList>
                  <ListItem>
                    Mac: Use the shortcut "command + spacebar" and type
                    "terminal"
                  </ListItem>
                  <ListItem>Linux: Use the shortcut "ctrl + alt + t"</ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem color="white">
                Within the command line, enter{" "}
                <Code bgColor="gray.600">python --version</Code>
                <UnorderedList>
                  <ListItem>
                    This will allow you to see which Python version is currently
                    installed if applicable. Otherwise, no version of Python
                    will be found
                  </ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem color="white">
                You can use this command to verify your installation of Python
                <UnorderedList>
                  <ListItem>
                    If you see a version less than 3.8.4, you may want to
                    consider reinstalling the latest version of Python
                  </ListItem>
                </UnorderedList>
              </ListItem>
            </OrderedList>
          </CardBody>
        </Card>
      </SiteCard>

      <SiteCard mb={10}>
        <Heading size="md" color="white">
          Options For Installing Python:
        </Heading>
        <Divider my={4} borderColor="blue.400" borderWidth="1px" />
        <Card bgColor="gray.800">
          <CardBody>
            <OrderedList color="white" fontWeight="bold" fontSize="lg">
              <ListItem>
                Installing from the{" "}
                <Link
                  color="teal.500"
                  href="https://apps.microsoft.com/store/apps"
                >
                  Microsoft Store
                </Link>{" "}
                (Recommended for beginners)
              </ListItem>
              <ListItem>
                Install Directly From{" "}
                <Link color="teal.500" href="https://www.python.org/downloads/">
                  Python Website
                </Link>
              </ListItem>
              <UnorderedList color="white" fontWeight="normal" fontSize="md">
                <ListItem>
                  The full installer gives you more control over the
                  installation
                </ListItem>
                <ListItem>
                  If you simply wish to use Python, you can proceed with all the
                  default installation procedures
                </ListItem>
              </UnorderedList>
            </OrderedList>
          </CardBody>
        </Card>
      </SiteCard>

      <SiteCard>
        <Heading size="md" color="white">
          Installing Visual Studio Code:
        </Heading>
        <Divider my={4} borderColor="blue.400" borderWidth="1px" />
        <Card bgColor="gray.800" mb={5}>
          <CardBody color="white">
            Visual Studio Code, often abbreviated as VS Code, is a powerful and
            versatile code editor developed by Microsoft. It has gained immense
            popularity among programmers of all levels due to its user-friendly
            interface, extensive features, and robust capabilities. We will be
            using Visual Studio Code to create our Python programs. Follow the
            steps below for installation!
          </CardBody>
        </Card>
        <Card bgColor="gray.800">
          <CardBody>
            <OrderedList color="white" fontWeight="bold" fontSize="lg">
              <ListItem>
                Download the{" "}
                <Link
                  color="teal.500"
                  href="https://code.visualstudio.com/download"
                >
                  Visual Studio Code Installer
                </Link>
              </ListItem>
              <ListItem>Once installed, run the application</ListItem>
              <ListItem>
                By default, VS Code is installed under
                C:\Users\Username\AppData\Local\Programs\Microsoft VS Code.
              </ListItem>
            </OrderedList>
          </CardBody>
        </Card>
      </SiteCard>
    </Flex>
  );
};

export default PythonSetup;
