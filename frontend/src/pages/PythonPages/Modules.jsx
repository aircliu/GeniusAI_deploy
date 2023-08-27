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

const Modules = () => {
  const [selectedId, setSelectedId] = useState(null);

  const questions = [
    {
      id: "1",
      title:
        "Fill in the missing code to create a function named get_square_root that takes an int parameter and returns its square root.",
      subtitle: `# What should we import here?\n\ndef get_square_root(num):\n\t# Your code here`,
      answer: `import math\n\ndef get_square_root(num):\n\treturn math.sqrt(num)`,
    },
    {
      id: "2",
      title:
        "Fill in the missing code to create a function named calculate_area_of_circle that takes the radius of a circle and returns its area.",
      subtitle: `# What should we import here?\n\ndef calculate_area_of_circle(r):\n\t# Your code here`,
      answer: `import math\n\ndef calculate_area_of_circle():\n\treturn math.pi * r ** 2`,
    },
    {
      id: "3",
      title:
        "It takes a delivery company 3 days to deliver an ordered product. Fill in the missing code to create a function named calculate_delivery_day that has no parameters and can calculate the expected delivery day of an ordered product based on the current day.",
      subtitle: `# What should we import here?\n\ndef calculate_delivery_day():\n\t# Your code here`,
      answer: `import datetime\n\ndef calculate_delivery_day():\n\ttoday = datetime.date.today()\n\tdelivery_time = datetime.timedelta(days=3)\n\t return today + delivery_time`,
    },
    {
      id: "4",
      title:
        "Given the following URL endpoint: https://api.example.com/test, make a get request and print out the response in JSON format.",
      subtitle: `# What should we import here?\n\n# Your code here`,
      answer: `import requests\n\nresponse = requests.get('https://api.example.com/test')\nprint(response.json())`,
    },
    {
      id: "5",
      title:
        "Given the following URL endpoint: https://api.example.com/test and some existing data, make a post request and print out the response as text.",
      subtitle: `# What should we import here?\n\nexisting_data = {'fieldOne': 'someData', 'fieldTwo': 'someOtherData'}\n# Your code here`,
      answer: `import requests\n\nexisting_data = {'fieldOne': 'someData', 'fieldTwo': 'someOtherData'}\nresponse = requests.post('https://api.example.com/test', data=existing_data)\nprint(response.text)`,
    },
  ];

  return (
    <>
      <Flex direction="column" p="7rem 5rem 5rem" bgColor="black">
        <SiteCard mb={10}>
          <Heading color="white" mb={1}>
            Lesson 6: Advanced Python Modules
          </Heading>
          <Text fontSize="md" fontStyle="italic" color="white" mb={4}>
            Elevate your Python programming skills by delving into advanced
            modules that enable you to create versatile and high-performance
            applications.
            <Divider my={4} borderColor="blue.500" borderWidth="1px" />
            To use our AI, press the chat button on the bottom right!
          </Text>
        </SiteCard>

        <SiteCard marginBottom={10}>
          <Heading size="md" color="white">
            Exploring the 'math' Module
          </Heading>
          <Divider
            marginTop={4}
            marginBottom={4}
            borderColor="blue.400"
            borderWidth="1px"
          />

          <Card bgColor="gray.800" marginBottom={5}>
            <CardBody color="white">
              Python's `math` module equips developers with an array of
              mathematical functions and constants. This module saves time and
              ensures accuracy as you won't need to code basic mathematical
              operations from scratch.
            </CardBody>
          </Card>

          <Card bgColor="gray.800" marginBottom={5}>
            <CardBody color="white">
              <Heading color="white" size="md" marginBottom={3}>
                Square Root: math.sqrt()
              </Heading>
              <CodeBlock
                codeString={`import math\n\nresult = math.sqrt(25)\nprint(result)  # Outputs: 5.0`}
                language="python"
              />
              <Text marginTop={3} color="white">
                The `math.sqrt()` function returns the square root of a
                specified number.
              </Text>
            </CardBody>
          </Card>

          <Card bgColor="gray.800" marginBottom={5}>
            <CardBody color="white">
              <Heading color="white" size="md" marginBottom={3}>
                Trigonometric Functions: math.sin() & math.cos()
              </Heading>
              <CodeBlock
                codeString={`import math\n\nangle = math.pi / 4  # 45 degrees\nsin_val = math.sin(angle)\ncos_val = math.cos(angle)\nprint(sin_val)  # Outputs: 0.707...\nprint(cos_val)  # Outputs: 0.707...`}
                language="python"
              />
              <Text marginTop={3} color="white">
                The `math` module offers various trigonometric functions. For
                instance, `math.sin()` and `math.cos()` return the sine and
                cosine values of a given angle in radians, respectively.
              </Text>
            </CardBody>
          </Card>

          <Card bgColor="gray.800" marginBottom={5}>
            <CardBody color="white">
              <Heading color="white" size="md" marginBottom={3}>
                Logarithmic Functions: math.log() & math.log10()
              </Heading>
              <CodeBlock
                codeString={`import math\n\nvalue = 100\nlog_e = math.log(value)  # Natural logarithm\nlog_10 = math.log10(value)  # Base 10 logarithm\nprint(log_e)  # Outputs: 4.605...\nprint(log_10)  # Outputs: 2.0`}
                language="python"
              />
              <Text marginTop={3} color="white">
                The module also provides logarithmic functions. `math.log()`
                gives the natural logarithm, while `math.log10()` returns the
                base 10 logarithm of a number.
              </Text>
            </CardBody>
          </Card>

          <Card bgColor="gray.800">
            <CardBody color="white">
              <Heading color="white" size="md" marginBottom={3}>
                Constants: math.pi & math.e
              </Heading>
              <CodeBlock
                codeString={`import math\n\nprint(math.pi)  # Outputs: 3.141592653589793\nprint(math.e)  # Outputs: 2.718281828459045`}
                language="python"
              />
              <Text marginTop={3} color="white">
                The `math` module offers essential mathematical constants.
                `math.pi` gives the value of π (pi), while `math.e` provides the
                value of e, the base of natural logarithms.
              </Text>
            </CardBody>
          </Card>
        </SiteCard>

        <SiteCard mb={10}>
          <Heading size="md" color="white">
            Dive Into the 'datetime' Module
          </Heading>
          <Divider my={4} borderColor="blue.400" borderWidth="1px" />

          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              Python's `datetime` module offers a range of classes to manipulate
              dates, times, intervals, and time zones. Whether you're aiming to
              fetch the current date or parse dates from strings, this module
              offers tools to handle time-related operations with ease.
            </CardBody>
          </Card>

          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Getting Today's Date
              </Heading>
              <CodeBlock
                codeString={`import datetime\n\ntoday = datetime.date.today()\nprint(today)  # This will print the current date in the format YYYY-MM-DD.`}
                language="python"
              />
              <Text mt={3} color="white">
                With `datetime.date.today()`, we can effortlessly obtain the
                current date. The returned format is `YYYY-MM-DD`, where `YYYY`
                is the year, `MM` the month, and `DD` the day.
              </Text>
            </CardBody>
          </Card>

          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Getting the Current Time
              </Heading>
              <CodeBlock
                codeString={`current_time = datetime.datetime.now().time()\nprint(current_time)  # This prints the current local time.`}
                language="python"
              />
              <Text mt={3} color="white">
                The `datetime.datetime.now().time()` method fetches the current
                local time, presenting hours, minutes, seconds, and
                microseconds. The `.time()` function, called on
                `datetime.now()`, extracts only the time component.
              </Text>
            </CardBody>
          </Card>

          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Working with Time Intervals
              </Heading>
              <CodeBlock
                codeString={`seven_days = datetime.timedelta(days=7)\nnext_week = today + seven_days\nprint(next_week)  # This will display the date seven days from today.`}
                language="python"
              />
              <Text mt={3} color="white">
                The `datetime.timedelta` class allows for defining specific
                durations, like 7 days. By adding this duration to a date (e.g.,
                `today`), we can calculate dates in the future or past.
              </Text>
            </CardBody>
          </Card>
        </SiteCard>

        <SiteCard marginBottom={10}>
          <Heading size="md" color="white">
            Dive into the 'os' Module
          </Heading>
          <Divider
            marginTop={4}
            marginBottom={4}
            borderColor="blue.400"
            borderWidth="1px"
          />

          <Card bgColor="gray.800" marginBottom={5}>
            <CardBody color="white">
              The `os` module in Python serves as a bridge between your program
              and the underlying operating system. With it, you can perform
              various OS-related tasks in a way that's platform-independent.
              Whether you're reading or writing to the file system, launching
              system commands, or managing processes, the `os` module has you
              covered.
            </CardBody>
          </Card>

          <Card bgColor="gray.800" marginBottom={5}>
            <CardBody color="white">
              <Heading color="white" size="md" marginBottom={3}>
                Getting Current Directory: os.getcwd()
              </Heading>
              <CodeBlock
                codeString={`import os\n\ndirectory = os.getcwd()\nprint(directory)  # This prints the current working directory`}
                language="python"
              />
              <Text marginTop={3} color="white">
                The `os.getcwd()` method returns the current working directory
                of the process. It's a straightforward way to know where your
                script is operating within the file system.
              </Text>
            </CardBody>
          </Card>

          <Card bgColor="gray.800" marginBottom={5}>
            <CardBody color="white">
              <Heading color="white" size="md" marginBottom={3}>
                Listing Files in a Directory: os.listdir()
              </Heading>
              <CodeBlock
                codeString={`import os\n\nfiles = os.listdir()\nfor file in files:\n    print(file)  # This lists all files and directories in the current directory`}
                language="python"
              />
              <Text marginTop={3} color="white">
                The `os.listdir()` method returns a list of all files and
                directories in the specified directory. By default, it operates
                on the current directory.
              </Text>
            </CardBody>
          </Card>

          <Card bgColor="gray.800">
            <CardBody color="white">
              <Heading color="white" size="md" marginBottom={3}>
                Creating Directories: os.makedirs()
              </Heading>
              <CodeBlock
                codeString={`import os\n\npath = "my_new_directory"\nos.makedirs(path, exist_ok=True)  # This creates a new directory`}
                language="python"
              />
              <Text marginTop={3} color="white">
                With `os.makedirs()`, you can create new directories. The
                `exist_ok` parameter ensures the function doesn't raise an error
                if the directory already exists.
              </Text>
            </CardBody>
          </Card>
        </SiteCard>

        <SiteCard mb={10}>
          <Heading size="md" color="white">
            The Power of the 'requests' Module
          </Heading>
          <Divider my={4} borderColor="blue.400" borderWidth="1px" />

          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              Python's `requests` module simplifies the process of making HTTP
              requests. Whether it's retrieving a webpage, submitting form data,
              or interacting with a RESTful API, the `requests` module makes the
              process straightforward and intuitive.
            </CardBody>
          </Card>

          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Fetching Content with GET
              </Heading>
              <CodeBlock
                codeString={`import requests\n\nresponse = requests.get('https://api.example.com/data')\nprint(response.json())  # This will display the JSON content returned from the API.`}
                language="python"
              />
              <Text mt={3} color="white">
                The `requests.get()` function sends a GET request to the
                provided URL. Upon receipt of the response, the `.json()` method
                decodes the JSON content for easy Python-native access.
              </Text>
            </CardBody>
          </Card>

          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Posting Data with POST
              </Heading>
              <CodeBlock
                codeString={`data = {'username': 'john', 'password': 'pass123'}\nresponse = requests.post('https://api.example.com/login', data=data)\nprint(response.text)`}
                language="python"
              />
              <Text mt={3} color="white">
                With `requests.post()`, you can send a POST request with data.
                This is useful for form submissions, logging in, or any
                situation where data needs to be sent to the server. The example
                above sends login credentials and then prints the server's
                response.
              </Text>
            </CardBody>
          </Card>

          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Handling Response Status
              </Heading>
              <CodeBlock
                codeString={`response = requests.get('https://api.example.com/data')\nif response.status_code == 200:\n    print('Success!')\nelse:\n    print(f"Failed with status code: {response.status_code}")`}
                language="python"
              />
              <Text mt={3} color="white">
                It's vital to check the response's status code to determine if
                the request was successful. The `status_code` attribute provides
                this information, allowing you to handle different HTTP statuses
                appropriately.
              </Text>
            </CardBody>
          </Card>

          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Handling Timeouts and Exceptions
              </Heading>
              <CodeBlock
                codeString={`try:\n    response = requests.get('https://api.example.com/data', timeout=5)\n    response.raise_for_status()\nexcept requests.Timeout:\n    print('The request timed out')\nexcept requests.RequestException as e:\n    print(f"An error occurred: {e}")`}
                language="python"
              />
              <Text mt={3} color="white">
                Requests can sometimes fail or timeout. By setting a `timeout`,
                you ensure that the request won't hang indefinitely. Using
                `response.raise_for_status()`, any HTTP error response (like 404
                or 500) will raise an exception, allowing for more streamlined
                error handling.
              </Text>
            </CardBody>
          </Card>
        </SiteCard>

        <SiteCard mb={10}>
          <Heading size="md" color="white">
            Diving Deep into Pygame
          </Heading>
          <Divider my={4} borderColor="blue.400" borderWidth="1px" />

          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              Pygame is a renowned library in the Python community, making game
              development accessible and fun. Built atop the SDL (Simple
              DirectMedia Layer), it provides a framework for creating
              interactive multimedia applications, including games, simulations,
              and educational projects.
            </CardBody>
          </Card>

          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Setting Up the Game Window
              </Heading>
              <CodeBlock
                codeString={`import pygame\n\npygame.init()\nscreen = pygame.display.set_mode((400, 300))\n\nwhile True:\n    for event in pygame.event.get():\n        if event.type == pygame.QUIT:\n            pygame.quit()`}
                language="python"
              />
              <Text mt={3} color="white">
                This basic code initializes Pygame, sets up a game window with
                dimensions 400x300, and continuously listens for events. The
                most crucial event here is `pygame.QUIT`, which will terminate
                the game if the close button is pressed.
              </Text>
            </CardBody>
          </Card>

          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Drawing and Coloring
              </Heading>
              <CodeBlock
                codeString={`color = (0, 128, 255)  # RGB for a shade of blue\npygame.draw.rect(screen, color, pygame.Rect(30, 30, 60, 60))\n\npygame.display.flip()`}
                language="python"
              />
              <Text mt={3} color="white">
                Pygame offers various drawing functions, and in this snippet,
                we're drawing a blue rectangle on the game window. The
                `pygame.display.flip()` function updates the entire display,
                making our drawn shapes visible.
              </Text>
            </CardBody>
          </Card>

          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Sound and Music
              </Heading>
              <CodeBlock
                codeString={`sound = pygame.mixer.Sound('path_to_sound.wav')\nsound.play()`}
                language="python"
              />
              <Text mt={3} color="white">
                Pygame simplifies playing sound effects and music. You can
                easily load and play sounds, making the gaming experience more
                immersive. This example loads a '.wav' file and plays it
                immediately.
              </Text>
            </CardBody>
          </Card>

          <Card bgColor="gray.800">
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Image Handling
              </Heading>
              <CodeBlock
                codeString={`image = pygame.image.load('path_to_image.png')\nscreen.blit(image, (50, 50))\n\npygame.display.flip()`}
                language="python"
              />
              <Text mt={3} color="white">
                Pygame is proficient at rendering images. The code above loads
                an image and displays it at coordinates (50, 50) on the screen.
                The `blit` method pastes the image onto the screen, and the
                subsequent `flip()` call refreshes the display to show our
                image.
              </Text>
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

export default Modules;
