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
import CodeBlock from "../../components/CodeBlock";
import NewAnimatedCard from "../../components/NewAnimation";

import Handtracker from "../../utils/HandTracker";
import { useNavigate } from "react-router-dom";

const Conditionals = () => {
  const navigate = useNavigate();

  const handlePrediction = (gesture) => {
    console.log('Detected Gesture:', gesture);
    if (gesture === 'Open Hand') {
      navigate('/functions');
    } else if (gesture === 'Close Hand') {
      navigate('/python-fundamentals')
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

  const [selectedId, setSelectedId] = useState(null);

  const questions = [
    {
      id: "1",
      title: "What will this code print out?",
      subtitle: `x = 10\nif x > 5:\n\tprint("x is greater than 5")\nelse:\n\tprint("x is not greater than 5")`,
      answer: `"x is greater than 5"`,
    },
    {
      id: "2",
      title: "What will this code print out?",
      subtitle: `count = 0\nwhile count < 5:\n\tprint(count)\n\tcount += 1`,
      answer: `0\n1\n2\n3\n4`,
    },
    {
      id: "3",
      title: "What will this code print out?",
      subtitle: `for i in range(1, 5):\n\tprint(i)`,
      answer: `1\n2\n3\n4`,
    },
    {
      id: "4",
      title: "What will this code print out?",
      subtitle: `fruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n\tprint(fruit)`,
      answer: `"apple"\n"banana"\n"cherry"`,
    },
    {
      id: "5",
      title: "What will this code print out?",
      subtitle: `number = 8\nif number % 2 == 0:\n\tprint("Even")\nelse:\n\tprint("Odd")`,
      answer: `"Even"`,
    },
  ];

  return (
    <>
      <Flex direction="column" p="7rem 5rem 5rem" bgColor="black">
        <SiteCard mb={10}>
          <Heading color="white" mb={1}>
            Lesson 3: Conditionals and Control Flow
          </Heading>
          <Text fontSize="md" fontStyle="italic" color="white" mb={4}>
            Master decision-making in Python using if-statements, loops, and
            operators for adaptable, efficient programs.
            <Divider my={4} borderColor="blue.500" borderWidth="1px" />
            To use our AI, press the chat button on the bottom right!
          </Text>
        </SiteCard>

        <SiteCard mb={10}>
          <Heading size="md" color="white">
            If Statements:
          </Heading>
          <Divider my={4} borderColor="blue.400" borderWidth="1px" />
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              In Python, the "if" statement is a fundamental control flow
              mechanism that allows you to execute specific blocks of code based
              on certain conditions. It allows your program to make decisions
              and take different actions depending on whether a given condition
              evaluates to True or False. There are two main parts to an if
              statement: condition and body. A line of code will be considered
              to be a part of the body of an if statement if it is below the if
              statement and is indented. If the condition is true, then the body
              of the code will execute. Otherwise, the body will be skipped over
              and the code will not execute.
            </CardBody>
          </Card>
          <Card bgColor="gray.800">
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Code Example
              </Heading>
              <CodeBlock
                codeString={`if condition:\n\tprint("Hello world") # This will print the string "Hello world" if condition evaluates to True\n\nprint("Hey there!) # This will always execute regardless of the condition being True or False since it is not part of the body of the if statement`}
                language="python"
              />
            </CardBody>
          </Card>
        </SiteCard>

        <SiteCard mb={10}>
          <Heading size="md" color="white">
            What determines whether something is True or False?
          </Heading>
          <Divider my={4} borderColor="blue.400" borderWidth="1px" />
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              Python determines the "truthiness" of an if statement by
              performing a truth test. The expression in the condition is
              evaluated and returns a value. This value is then tested if it is
              "truthy" or "falsy". In Python, the concept of truthiness refers
              to how values are evaluated as either true or false in certain
              contexts. For booleans: True is considered truthy, and False is
              considered falsy. However, the truthiness concept extends to other
              data types as well. For instance, numbers are evaluated based on
              whether they are zero or non-zero. A non-zero number is considered
              truthy, while zero is considered falsy. Similarly, for strings,
              they are evaluated based on whether they are empty or contain
              characters. An empty string is considered falsy, while a non-empty
              string is considered truthy.
            </CardBody>
          </Card>
          <Card bgColor="gray.800">
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Code Example
              </Heading>
              <CodeBlock
                codeString={`if True:\n\tprint("Hello world") # This will print the string "Hello world"`}
                language="python"
              />
              <CodeBlock
                codeString={`if False:\n\tprint("Hello world") # This will print nothing since the body will not execute"`}
                language="python"
              />
            </CardBody>
          </Card>
        </SiteCard>

        <SiteCard mb={10}>
          <Heading size="md" color="white">
            The "elif" and "else" Clauses
          </Heading>
          <Divider my={4} borderColor="blue.400" borderWidth="1px" />
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              An if statement can also be accompanied by an else clause. This
              clause will execute should the condition in the if statement be
              falsy. Note that the inclusion of an else statement is optional.
              If the if statement is falsy and there is no else statement, then
              no code will be executed instead.
            </CardBody>
          </Card>
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Code Example
              </Heading>
              <CodeBlock
                codeString={`x = 0\nif x > 3:\n\tprint("Hello world")\nelse:\n\tprint("Goodbye") # This will be printed since x is not greater than 3`}
                language="python"
              />
            </CardBody>
          </Card>
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              In between the if and else statements, an elif statement can be
              placed. Functionally, they are identical to if statements but will
              only execute if the if/elif statement above it is falsy. You can
              have as many elif statements as you want but they must appear
              after an if statements and before the optional else statement.
            </CardBody>
          </Card>
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Code Example
              </Heading>
              <CodeBlock
                codeString={`x = 3\nif x > 5:\n\tprint("Hello world")\nelif x > 3:\n\tprint("Hello")\nelif x > 2\n\tprint("Hi") # This will be printed\nelse:\n\tprint("Goodbye")`}
                language="python"
              />
            </CardBody>
          </Card>
        </SiteCard>

        <SiteCard mb={10}>
          <Heading size="md" color="white">
            The While Loop
          </Heading>
          <Divider my={4} borderColor="blue.400" borderWidth="1px" />
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              A while loop is a programming construct that allows you to execute
              a block of code repeatedly as long as a specified condition
              remains true. It's like giving your program a set of instructions
              to perform a task multiple times until a certain condition is met.
            </CardBody>
          </Card>
          <Card bgColor="gray.800">
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Code Example
              </Heading>
              <CodeBlock
                codeString={`x = 3\nwhile x > 0:\n\tprint("Hi")\n\tx -= 1 # Quick note: The -= syntax essentially subtracts 1 from the value of x and reassigns x to that new value\n# The loop will run a total of 3 times\n# Initially x will be 3, then 2, then 1, then 0, which terminates the loop since x is 0 and is no longer greater than 0`}
                language="python"
              />
            </CardBody>
          </Card>
        </SiteCard>

        <SiteCard mb={10}>
          <Heading size="md" color="white">
            The Break Statement
          </Heading>
          <Divider my={4} borderColor="blue.400" borderWidth="1px" />
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              The break statement is a statement that when executed, will break
              out of the current while loop right away, even if the current
              condition is still truthy.
            </CardBody>
          </Card>
          <Card bgColor="gray.800">
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Code Example
              </Heading>
              <CodeBlock
                codeString={`while True:\n\tprint("Hi")\n\tbreak # "Hi" will only be printed once because once the break statement is encountered, the program will exit the while loop`}
                language="python"
              />
            </CardBody>
          </Card>
        </SiteCard>

        <SiteCard mb={10}>
          <Heading size="md" color="white">
            Using the "else" Clause With While Loops
          </Heading>
          <Divider my={4} borderColor="blue.400" borderWidth="1px" />
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              A while loop can also have an else clause similarly to an if
              statement. However, the functionality is slightly different. The
              else clause of a while loop will only execute if the while loop
              terminates "naturally" as in the condition in the loop was
              evaluated to be falsy. Otherwise, if a break statement was used
              instead, the body of the else statement will be skipped entirely.
            </CardBody>
          </Card>
          <Card bgColor="gray.800">
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Code Example
              </Heading>
              <CodeBlock
                codeString={`x = 3\n\nwhile x > 0:\n\tprint(x)\n\tx -= 1\nelse:\n\tprint("Ended normally")\n# This will print 3, 2, 1, "Ended normally"`}
                language="python"
              />
            </CardBody>
          </Card>
        </SiteCard>

        <SiteCard mb={10}>
          <Heading size="md" color="white">
            Ranges
          </Heading>
          <Divider my={4} borderColor="blue.400" borderWidth="1px" />
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              In simple terms, the range function, which is built-in to Python,
              generates a sequence of numbers. It is useful when we want to
              count through a sequence of numbers, such as 1 through 10 for
              example. Ranges are described by three integers: a start, a stop,
              and a step. The "start" is the first integer in the range. The
              "stop" is the integer where the range ends. Note that the "stop"
              is not inclusive — so, for example, a range with a "stop" of 10
              would not include the integer 10. The "step" is the difference
              between each integer in the range and the integer preceding it in
              the range. Note that including the "step" in the range is actually
              optional. If it's omitted, the "step" value will default to 1.
            </CardBody>
          </Card>
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Code Example
              </Heading>
              <CodeBlock
                codeString={`range(1, 10, 1) # This is an example of how to construct a range\nrange(1, 10) # This will construct the same range since the value of step defaults to 1`}
                language="python"
              />
            </CardBody>
          </Card>
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              Taking it one step further, if we pass only one value to the
              constructor of range, ew specify only the stop value. The start
              value is assumed to be 0 and again, the step value defaults to 1.
            </CardBody>
          </Card>
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Code Example
              </Heading>
              <CodeBlock
                codeString={`range(10) # This implicitly means range(0, 10, 1)`}
                language="python"
              />
            </CardBody>
          </Card>
        </SiteCard>

        <SiteCard mb={10}>
          <Heading size="md" color="white">
            Combining the Range with the For Loop
          </Heading>
          <Divider my={4} borderColor="blue.400" borderWidth="1px" />
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              Given an object that contains a sequence of other objects, a for
              loop is used to iterate through that sequence, with the loop's
              body executing once per each of its objects. A range generates a
              sequence of integers, which can be iterated over. Uisng this
              knowledge, we can use ranges and for loops together to create a
              loop that will execute a fixed number of times.
            </CardBody>
          </Card>
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Code Example
              </Heading>
              <CodeBlock
                codeString={`for i in range(3): # The variable i represents the individual object in the sequence that we're currently iterating over\n\tprint(i) # This will print 0, 1, 2`}
                language="python"
              />
            </CardBody>
          </Card>
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              Similar to while loops, for loops offer the option to incorporate
              the break statement within their execution, resulting in a
              comparable outcome: the abrupt termination of the loop,
              redirecting the program's flow to the line of code directly after
              the loop. Additionally, akin to while loops, for loops possess the
              capability to include an else clause, which solely executes if the
              loop concludes its iteration without any interruptions. This
              occurs when the loop completes the entire sequence, contrasting
              scenarios in which a break statement halts the loop prematurely.
            </CardBody>
          </Card>
        </SiteCard>

        <SiteCard>
          <Heading size="md" color="white" mb={5}>
            Test your knowledge!
          </Heading>
          {questions.map((question) => (
            <NewAnimatedCard
              key={question.id}
              item={question}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              language="python"
            />
          ))}
        </SiteCard>
        <Handtracker onPrediction={handlePrediction} />
      </Flex>
    </>
  );
};

export default Conditionals;
