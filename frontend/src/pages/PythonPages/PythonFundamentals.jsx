import React, { useState } from "react";
import {
  Flex,
  Heading,
  Text,
  Divider,
  Box,
  Card,
  CardBody,
  Link,
  UnorderedList,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import MenuHeader from "../../components/MenuHeader";
import SiteCard from "../../components/SiteCard";
import Chatbot from "../../components/Chatbot";
import CodeBlock from "../../components/CodeBlock";
import AnimatedCard from "../../components/NewAnimation";
import NewAnimatedCard from "../../components/NewAnimation";

import { useNavigate } from "react-router-dom";
import Handtracker from "../../utils/HandTracker";

const PythonFundamentals = () => {
  const navigate = useNavigate();

  const handlePrediction = (gesture) => {
    console.log('Detected Gesture:', gesture);
    if (gesture === 'Open Hand') {
      navigate('/conditionals-and-control-flow');
    } else if (gesture === 'Close Hand') {
      navigate('/python-setup')
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

  const questions = [
    {
      id: "1",
      title: "What will this code print out?",
      subtitle: `x = 10\ny = 3\nresult = x / y\nprint(result)`,
      answer: "3.3333...",
    },
    {
      id: "2",
      title: "What will this code print out?",
      subtitle: `x = 2.0\ny = 3\nresult = x + y\nprint(result)`,
      answer: "5.0",
    },
    {
      id: "3",
      title: "What will this code print out?",
      subtitle: `a = "Hello"\nb = 5\nprint(type(a))\nprint(type(b))`,
      answer: `<class 'str'>\n<class 'int'>`,
    },
    {
      id: "4",
      title: "What will this code print out?",
      subtitle: `num1 = 13\nnum2 = 3\nprint(num1 // num2)`,
      answer: `4`,
    },
    {
      id: "5",
      title: "What will this code print out?",
      subtitle: `x = 5.0\ny = 2\nz = x * y\nprint(z)`,
      answer: `10.0`,
    },
  ];

  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <Flex direction="column" p="7rem 5rem 5rem" bgColor="black">
        <SiteCard mb={10}>
          <Heading color="white" mb={1}>
            Lesson 2: Python Fundamentals
          </Heading>
          <Text fontSize="md" fontStyle="italic" color="white" mb={4}>
            Start writing your first line of code and explore the syntax of
            Python!
            <Divider my={4} borderColor="blue.500" borderWidth="1px" />
            To use our AI, press the chat button on the bottom right!
          </Text>
        </SiteCard>

        <SiteCard mb={10}>
          <Heading size="md" color="white">
            Writing Your First Line of Code:
          </Heading>
          <Divider my={4} borderColor="blue.400" borderWidth="1px" />
          <Text color="white">
            The magic begins with a simple line. Let's print a message in
            Python, put this line of code into your newly set up VsCode
            Environement and run it!:
          </Text>
          <CodeBlock codeString={`print("GeniusAI")`} language="python" />
        </SiteCard>

        <SiteCard mb={10}>
          <Heading size="md" color="white">
            Python Variables:
          </Heading>
          <Divider my={4} borderColor="blue.400" borderWidth="1px" />
          <Text color="white">
            In Python, variables are used to store data values. A variable is
            like a container that holds a piece of data, such as a number, a
            string, a list, or any other data type. When you create a variable,
            you give it a name, and you can then refer to that name to access
            the data stored in the variable.
          </Text>
          <CodeBlock
            codeString={`age = 30\nname = "John Doe"\npi = 3.14`}
            language="python"
          />
        </SiteCard>

        <SiteCard mb={10}>
          <Heading size="md" color="white">
            Python Data Types:
          </Heading>
          <Divider my={4} borderColor="blue.400" borderWidth="1px" />

          <Text color="white">
            Python offers a variety of data types to accommodate different types
            of information:
          </Text>

          <Text color="white" mt={2}>
            1. <strong>Strings (str):</strong> A sequence of characters used to
            represent text. For example:
          </Text>
          <CodeBlock codeString={`var1 = "Hello World"`} language="python" />

          <Text color="white" mt={2}>
            2. <strong>Integers (int):</strong> Whole numbers, both positive and
            negative. For example:
          </Text>
          <CodeBlock codeString={`var2 = 20`} language="python" />

          <Text color="white" mt={2}>
            3. <strong>Floating Point (float):</strong> Numbers with a decimal
            point. For example:
          </Text>
          <CodeBlock codeString={`var3 = 20.0`} language="python" />

          <Text color="white" mt={2}>
            4. <strong>Lists:</strong> An ordered collection of items, which can
            be of any type. Lists are mutable, which means that the values in a
            list can be altered after they are created. For example:
          </Text>
          <CodeBlock codeString={`var4 = [1, "a"]`} language="python" />

          <Text color="white" mt={2}>
            5. <strong>Tuples:</strong> Similar to a list, but they are
            immutable, which means their values cannot be modified after
            creation. For example:
          </Text>
          <CodeBlock codeString={`var5 = (1, "a")`} language="python" />

          <Text color="white" mt={2}>
            6. <strong>Sets:</strong> An unordered collection of unique items.
            Sets can be used to perform mathematical set operations like union,
            intersection, etc. For example:
          </Text>
          <CodeBlock codeString={`var6 = {1, 2}`} language="python" />

          <Text color="white" mt={2}>
            7. <strong>Dictionaries (dict):</strong> An unordered collection of
            data in a key:value pair form. Here, keys are unique and used to
            access values. For example:
          </Text>
          <CodeBlock codeString={`var7 = {'key': 'value'}`} language="python" />
        </SiteCard>

        <SiteCard mb={10}>
          <Heading size="md" color="white">
            Objects, Numbers, and Arithmetic Operators:
          </Heading>
          <Divider my={4} borderColor="blue.400" borderWidth="1px" />
          <Text color="white">
            Integers in Python are numbers without a fractional part, whereas
            floating-point numbers come with a fractional part. Python provides
            various arithmetic operators to work with these types.
            <CodeBlock
              codeString={`5 + 4 = 9\n2.5 + 3.75 = 6.25\n15.0 // 3.0 = 5.0`}
              language="python"
            />
          </Text>
          <Text color="white">
            Python also supports two kinds of division: division (/) and integer
            division (//). Additionally, the remainder can be calculated using
            the modulo (%) operator.
            <CodeBlock
              codeString={`12 / 4 = 3.0\n12 // 4 = 3\n

7 % 3 = 1`}
              language="python"
            />
          </Text>
          <Text color="white">
            In Python, you have the flexibility of performing calculations
            involving both whole numbers (integers) and decimal numbers
            (floats). This is known as mixed-mode arithmetic. When you use an
            integer and a float in an arithmetic operation, Python converts the
            integer into a float before carrying out the calculation. This
            ensures that your calculation is accurate and handles different
            types of numbers smoothly. So, whether you're working with whole
            numbers or decimal numbers, Python helps you perform calculations
            seamlessly by automatically adjusting the data types as needed.
            <CodeBlock
              codeString={`5 * 3.5 = 17.5\n12.5 // 3 = 4.0`}
              language="python"
            />
          </Text>
          <Text color="white">
            In programming, when you're working with expressions (combinations
            of values and operators), the order in which operators are evaluated
            is crucial. This order is determined by operator precedence, which
            specifies which operators are evaluated first. However, if you want
            to change this order and make sure certain operations are performed
            before others, you can use parentheses to group those operations
            together. This allows beginners in coding to have control over how
            their expressions are evaluated, ensuring that the desired
            calculations or actions take place in the correct sequence.
            <CodeBlock
              codeString={` 3 + 4 * 5 = 23\n(3 + 4) * 5 = 35`}
              language="python"
            />
          </Text>
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

export default PythonFundamentals;
