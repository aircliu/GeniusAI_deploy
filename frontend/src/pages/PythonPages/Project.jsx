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
import MenuHeader from "../../components/MenuHeader";
import SiteCard from "../../components/SiteCard";
import Chatbot from "../../components/Chatbot";
import AnimatedCard from "../../components/NewAnimation";
import CodeBlock from "../../components/CodeBlock";
import { FaGithub } from "react-icons/fa"; // Importing the GitHub icon

const Project = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <Flex direction="column" p="7rem 5rem 5rem" bgColor="black">
        <SiteCard marginBottom={10}>
          <Heading color="white" mb={1}>
            Python Mini Project: Text-based Adventure Game
          </Heading>
          <Divider
            marginTop={4}
            marginBottom={4}
            borderColor="blue.400"
            borderWidth="1px"
          />
          <Text fontStyle="italic" color="white" mb={4}>
            In this project, you'll create a text-based adventure game where
            players navigate through a series of rooms in a dungeon, solving
            puzzles, battling monsters, and collecting treasure. This project
            will introduce you to various concepts in Python, including classes,
            objects, and more.
          </Text>
        </SiteCard>
        <SiteCard bgColor="gray.800" marginBottom={5}>
          <CardBody color="white">
            <Heading color="white" size="lg" mb={2}>
              Rooms and Navigation
            </Heading>
            <Text mb={2}>
              Start by defining a class for the rooms in the dungeon. You can
              use attributes to describe each room, such as name, description,
              exits, and locked doors. Create methods to navigate between the
              rooms. Here's what you can expect:
            </Text>
            <CodeBlock
              codeString={`Current Room: Entrance Hall\nExits: North, East\nYou see a locked door to the West.`}
              language="plaintext"
            />
          </CardBody>
        </SiteCard>
        <SiteCard bgColor="gray.800" marginBottom={5}>
          <CardBody color="white">
            <Heading color="white" size="lg" mb={2}>
              Player Character
            </Heading>
            <Text mb={2}>
              Create a class for the player character with attributes such as
              health, inventory, and current location. This will allow you to
              track and modify the player's state throughout the game.
            </Text>
            <CodeBlock
              codeString={`Player Stats:\nHealth: 100\nInventory: Key, Torch\nLocation: Entrance Hall`}
              language="plaintext"
            />
          </CardBody>
        </SiteCard>
        <SiteCard bgColor="gray.800" marginBottom={5}>
          <CardBody color="white">
            <Heading color="white" size="lg" mb={2}>
              Game Loop
            </Heading>
            <Text mb={2}>
              Implement the main game loop. This loop will continuously prompt
              the player for input, update the game's state, and print the
              relevant information. Here's an example interaction:
            </Text>
            <CodeBlock
              codeString={`> move east\nYou enter the Library.\n> inspect\nYou find a hidden key!`}
              language="plaintext"
            />
          </CardBody>
        </SiteCard>
        <SiteCard bgColor="gray.800" marginBottom={5}>
          <CardBody color="white">
            <Heading color="white" size="md" mb={2}>
              Game Over and Victory
            </Heading>
            <Text mb={2}>
              Finally, define the winning and losing conditions. These could be
              based on the player's health, inventory, or reaching a specific
              room. Make sure to include victory and defeat messages.
            </Text>
            <CodeBlock
              codeString={`Congratulations, adventurer! You have defeated the evil wizard and saved the kingdom!`}
              language="plaintext"
            />
          </CardBody>
        </SiteCard>
        <SiteCard>
          <CardBody color="white">
            <Flex alignItems="center">
              <Link
                href="https://github.com/aircliu/MiniProj-for-GeniusAI"
                isExternal
              >
                <FaGithub size="24px" color="white" /> {/* GitHub icon */}
              </Link>
              <Text ml={2} fontSize="lg" color="white">
                Want to see an example?{" "}
                <Link
                  href="https://github.com/aircliu/MiniProj-for-GeniusAI"
                  color="blue.400"
                  isExternal
                >
                  Click Here for the code!
                </Link>
              </Text>
            </Flex>
          </CardBody>
        </SiteCard>
      </Flex>
    </>
  );
};

export default Project;
