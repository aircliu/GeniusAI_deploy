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

const Functions = () => {
  const questions = [
    {
      id: "1",
      title: "What will this code print out?",
      subtitle: `def greet(name):\n\treturn "Hello, " + name\nprint(greet("Alice"))`,
      answer: `"Hello, Alice"`,
    },
    {
      id: "2",
      title: "What will this code print out?",
      subtitle: `def is_even(number):\n\tif number % 2 == 0:\n\t\treturn True\n\telse:\n\t\treturn False\nprint(is_even(5))`,
      answer: `False`,
    },
    {
      id: "3",
      title: "What will this code print out?",
      subtitle: `def is_even(number):\n\tif number % 2 == 0:\n\t\treturn True\n\telse:\n\t\treturn False\nprint(is_even(5))`,
      answer: `False`,
    },
    {
      id: "4",
      title: "What will this code print out?",
      subtitle: `import math\nprint(math.sqrt(25))`,
      answer: `5.0`,
    },
    {
      id: "5",
      title: "What will this code print out?",
      subtitle: `def get_name_and_age():\n\tname = "Bob"\n\tage = 30\n\treturn name, age\n\nname, age = get_name_and_age()\nprint(name, age)`,
      answer: `Bob 30`,
    },
  ];

  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <Flex direction="column" p="7rem 5rem 5rem" bgColor="black">
        <SiteCard mb={10}>
          <Heading color="white" mb={1}>
            Lesson 3: Functions and Modularization
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
            Calling and Using Functions in Python:
          </Heading>
          <Divider my={4} borderColor="blue.400" borderWidth="1px" />
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              Functions in Python are defined using the "def" keyword, followed
              by the function name and parentheses (). They allow for
              encapsulation and reusability of code. When you define a function,
              you're essentially creating a set of instructions. You can then
              "call" the function to execute those instructions whenever needed.
            </CardBody>
          </Card>
          <Card bgColor="gray.800" mb={3}>
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Code Example: Basic Function
              </Heading>
              <CodeBlock
                codeString={`def greet():\n    print('Hello World!')\n\n# call the function\ngreet()\n\nprint('Outside function')`}
                language="python"
              />
            </CardBody>
          </Card>
          <Card bgColor="gray.800" mb={3}>
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Code Example: Function with Parameters
              </Heading>
              <CodeBlock
                codeString={`def greet_person(name):\n    print(f'Hello, {name}!')\n\ngreet_person('Alice')\ngreet_person('Bob')`}
                language="python"
              />
            </CardBody>
          </Card>
          <Text color="white" mt={4}>
            In the first example, we see a simple function that prints "Hello
            World!". In the second example, the function accepts a parameter,
            allowing us to greet different people by name. By using functions,
            we can write code more efficiently, avoid repetitive code, and make
            our programs easier to read and maintain.
          </Text>
          <Card bgColor="gray.800" mt={3}>
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Code Example: Function returning a Value
              </Heading>
              <CodeBlock
                codeString={`def add_numbers(a, b):\n    return a + b\n\nresult = add_numbers(5, 3)\nprint(f'The sum is: {result}')`}
                language="python"
              />
            </CardBody>
          </Card>
          <Text color="white" mt={4}>
            Here, we've defined a function that accepts two parameters and
            returns their sum. This showcases how functions can also process
            data and return results.
          </Text>
        </SiteCard>

        <SiteCard mb={10}>
          <Heading size="md" color="white">
            Function Arguments in Python:
          </Heading>
          <Divider my={4} borderColor="blue.400" borderWidth="1px" />
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              Functions can accept values, called arguments. Here, add_numbers()
              is defined with two arguments, num1 and num2.
            </CardBody>
          </Card>
          <Card bgColor="gray.800">
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Code Example
              </Heading>
              <CodeBlock
                codeString={`def add_numbers(num1, num2):\n    sum = num1 + num2\n    print("Sum: ",sum)\n\n# call the function\nadd_numbers(5, 4)`}
                language="python"
              />
            </CardBody>
          </Card>
          <Text color="white" mt={4}>
            We call the function with values 5 and 4, which are passed as num1
            and num2 respectively.
          </Text>
        </SiteCard>

        <SiteCard mb={10}>
          <Heading size="md" color="white">
            The "Return" Statement in Python:
          </Heading>
          <Divider my={4} borderColor="blue.400" borderWidth="1px" />
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              In Python, the "return" statement exits a function and hands back
              a value to its caller. The returned value can be of any type: a
              number, string, list, object, etc. If no expression is provided
              with "return" or if it's absent altogether, the function will
              return `None`. The power of "return" is that it allows for
              information flow from a function to the location where it was
              called. This facilitates modularity and code reuse.
            </CardBody>
          </Card>
          <Card bgColor="gray.800">
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Code Example
              </Heading>
              <CodeBlock
                codeString={`
def find_square(num):
    return num * num

def greet(name):
    return f"Hello, {name}!"

# Function call
square = find_square(4)
greeting = greet("Alice")

print('Square:', square)
print(greeting)
                `}
                language="python"
              />
            </CardBody>
          </Card>
          <Card bgColor="gray.800" mt={5}>
            <CardBody color="white">
              It's also common to use multiple return statements, for instance,
              in conditional statements to return different values based on
              different conditions. But, as soon as a return statement is
              executed, the function terminates immediately, which means any
              code after the return statement won't be executed.
            </CardBody>
          </Card>
        </SiteCard>

        <SiteCard mb={10}>
          <Heading size="md" color="white">
            Understanding the 'import' Statement in Python
          </Heading>
          <Divider my={4} borderColor="blue.400" borderWidth="1px" />
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              In Python, the 'import' statement allows you to access functions,
              classes, and variables defined in another module, making code
              modular and reusable. When a module is imported, Python executes
              all of the code inside the module, and its attributes become
              available for use in the importing script. This way, developers
              can leverage a vast array of standard libraries and third-party
              packages without rewriting the same functionality.
            </CardBody>
          </Card>
          <Card bgColor="gray.800">
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Code Example
              </Heading>
              <CodeBlock
                codeString={`
import math

# After importing the math module, we can use its functions like sqrt().
square_root = math.sqrt(4)

print("Square Root of 4 is", square_root)

# pow() is a built-in function, so no import is needed.
power = pow(2, 3)

print("2 to the power 3 is", power)
                `}
                language="python"
              />
            </CardBody>
          </Card>
        </SiteCard>

        <SiteCard mb={10}>
          <Heading size="md" color="white">
            Python Library Functions:
          </Heading>
          <Divider my={4} borderColor="blue.400" borderWidth="1px" />
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              Python modules serve as a method for structuring interconnected
              groups of functions, classes, and variables into single files. By
              doing this, you can easily import these modules into various
              scripts or programs, making use of their features and encouraging
              the reuse of code. Python's standard library is a treasure trove
              of pre-built modules that cater to numerous everyday tasks,
              eliminating the necessity for external libraries in many cases.
            </CardBody>
          </Card>
          <Card bgColor="gray.800">
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Code Example
              </Heading>
              <CodeBlock
                codeString={`
import os

# os module provides functions to interact with the operating system
current_dir = os.getcwd()  # Gets the current working directory

print("Current Directory:", current_dir)

# len() is a built-in function to get the length of an object
word = "Python"
length = len(word)

print(f"Length of the word '{word}' is:", length)
                `}
                language="python"
              />
            </CardBody>
          </Card>
        </SiteCard>

        <SiteCard mb={10}>
          <Heading size="md" color="white">
            Scopes in Python: Local vs Global:
          </Heading>
          <Divider my={4} borderColor="blue.400" borderWidth="1px" />
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              In Python, variables are given a scope when they are defined. The
              scope determines where a variable can be accessed or modified.
              There are two main types: <b>Local Scope</b> and{" "}
              <b>Global Scope</b>.
            </CardBody>
          </Card>
          <Card bgColor="gray.800">
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Code Example
              </Heading>
              <CodeBlock
                codeString={`# Global variable\nglobal_var = 'I am a global variable'\n\ndef my_function():\n    # Local variable\n    local_var = 'I am a local variable'\n    print(global_var)  # Can access global variable\n    print(local_var)  # Can access local variable\n\nmy_function()\n\n# This will print global variable\nprint(global_var)\n\n# This will cause an error since local_var is not in global scope\n# print(local_var)`}
                language="python"
              />
            </CardBody>
          </Card>
          <Text color="white" mt={4}>
            Variables defined within a function have a local scope and are only
            accessible within that function. In contrast, variables defined
            outside of functions have a global scope and can be accessed
            throughout the module. However, to modify a global variable within a
            function, you must use the <b>global</b> keyword.
          </Text>
        </SiteCard>

        <SiteCard mb={10}>
          <Heading size="md" color="white">
            Benefits of Functions:
          </Heading>
          <Divider my={4} borderColor="blue.400" borderWidth="1px" />
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              The primary benefit of functions is code reusability. Define once,
              use multiple times. For instance, the get_square() function can be
              used to compute the square of any number.
            </CardBody>
          </Card>
          <Card bgColor="gray.800">
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Code Example
              </Heading>
              <CodeBlock
                codeString={`def get_square(num):\n    return num * num`}
                language="python"
              />
            </CardBody>
          </Card>
        </SiteCard>

        <SiteCard>
          <Heading size="md" color="white" mb={5}>
            Test your knowledge!
          </Heading>
          {questions.map((question) => (
            <AnimatedCard
              key={question.id}
              item={question}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              language="python"
            />
          ))}
        </SiteCard>
      </Flex>
    </>
  );
};

export default Functions;
