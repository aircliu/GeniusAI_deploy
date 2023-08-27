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

const ObjectOriented = () => {
  const [selectedId, setSelectedId] = useState(null);

  const questions = [
    {
      id: "1",
      title: "What will this code print out?",
      subtitle: `class Car:\n\tdef __init__(self, make, model):\n\t\tself.make = make\n\t\tself.model = model\n\n\tdef display_info(self):\n\t\treturn f"This car is a {self.make} {self.model}."\n\nmy_car = Car("Toyota", "Camry")\nprint(my_car.display_info())`,
      answer: `"This car is a Toyota Camry."`,
    },
    {
      id: "2",
      title: "What will this code print out?",
      subtitle: `class Animal:\n\tdef __init__(self, species):\n\t\tself.species = species\n\n\tdef make_sound(self):\n\t\treturn "Some generic animal sound."\n\n\nclass Dog(Animal):\n\tdef make_sound(self):\n\t\treturn "Woof woof!"\n\nmy_dog = Dog("Canine")\nprint(my_dog.make_sound())`,
      answer: `"Woof woof!"`,
    },
    {
      id: "3",
      title: "What will this code print out?",
      subtitle: `class Circle:\n\tdef __init__(self, radius):\n\t\tself.radius = radius\n\n\tdef area(self):\n\t\treturn 3.14 * self.radius ** 2\n\nsmall_circle = Circle(5)\nprint(small_circle.area())`,
      answer: `78.5`,
    },
    {
      id: "4",
      title: "What will this code print out?",
      subtitle: `class Parent:\n\tdef __init__(self, name):\n\t\tself.name = name\n\n\tdef greet(self):\n\t\treturn f"Hello, I'm {self.name}."\n\n\nclass Child(Parent):\n\tdef greet(self):\n\t\treturn f"Hi there, I'm {self.name}."\n\nchild = Child("Alice")\nprint(child.greet())`,
      answer: `"Hi there, I'm Alice."`,
    },
    {
      id: "5",
      title: "What will this code print out?",
      subtitle: `class BankAccount:\n\tdef __init__(self, balance):\n\t\tself.__balance = balance\n\n\tdef get_balance(self):\n\t\treturn self.__balance\n\nmy_account = BankAccount(1000)\nprint(my_account.get_balance())`,
      answer: `1000`,
    },
  ];

  return (
    <>
      <Flex direction="column" p="7rem 5rem 5rem" bgColor="black">
        <SiteCard mb={10}>
          <Heading color="white" mb={1}>
            Lesson 5: Object-Oriented Programming
          </Heading>
          <Text fontSize="md" fontStyle="italic" color="white" mb={4}>
            Unleash the power of Object-Oriented Programming in Python. Learn to
            design and create classes, harnessing abstraction and reusability
            for more organized and efficient coding.
            <Divider my={4} borderColor="blue.500" borderWidth="1px" />
            To use our AI, press the chat button on the bottom right!
          </Text>
        </SiteCard>

        <SiteCard mb={10}>
          <Heading size="md" color="white">
            What is Object-Oriented Programming
          </Heading>
          <Divider my={4} borderColor="blue.400" borderWidth="1px" />
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              Python is a type of object-oriented programming language.
              Object-oriented programming (OOP) is a programming style that
              structures code by treating data (attributes) and functions
              (methods) as self-contained units called objects. It helps
              organize complex programs by allowing us to model real-world
              entities as objects, making the code more modular, reusable, and
              easier to maintain. In Python, virtually everything is represented
              as an object, which makes code more modular, reusable, and easier
              to maintain.
            </CardBody>
          </Card>
        </SiteCard>

        <SiteCard mb={10}>
          <Heading size="md" color="white">
            Introduction to Classes
          </Heading>
          <Divider my={4} borderColor="blue.400" borderWidth="1px" />
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              In object-oriented programming, a class serves as a blueprint or
              template for creating objects. It defines the structure and
              behavior that the objects of that class will have. Think of a
              class as a set of instructions that describe how an object should
              be constructed and what actions it can perform. Just like a
              blueprint guides the construction of a building, a class guides
              the creation and behavior of objects in your code, allowing you to
              create consistent and reusable code.
            </CardBody>
          </Card>
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Attributes
              </Heading>
              In Python classes, attributes are variables that store data within
              objects created from that class. They define the characteristics
              or properties of the objects. Attributes can hold different types
              of data, such as numbers, strings, or even other objects. These
              attributes help define the state of the object and provide
              information that can be accessed and manipulated through methods
              within the class. For example, in a "Car" class, attributes like
              "color," "make," and "model" would describe different aspects of
              each car object created from that class.
            </CardBody>
          </Card>
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Methods
              </Heading>
              In Python classes, methods are functions that define the behavior
              or actions that objects created from that class can perform.
              Methods are associated with the class and operate on the data
              stored in its attributes. They allow you to define specific
              operations that can be executed on objects of the class. Methods
              are used to modify the attributes of an object, retrieve
              information, or perform other tasks relevant to the class's
              purpose. For instance, in a "BankAccount" class, methods like
              "deposit," "withdraw," and "get_balance" would represent actions
              that can be performed on individual bank account objects.
            </CardBody>
          </Card>
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                The Constructor
              </Heading>
              In Python, a constructor is a special method within a class that
              gets automatically called when you create an object (instance) of
              that class. It has the special name __init__() and is used to
              initialize the attributes (data members) of the object with
              initial values. The constructor allows you to set up the initial
              state of the object by assigning values to its attributes. For
              example, if you have a class representing a Person, the
              constructor could be used to set the initial name and age
              attributes of the person when an object of the Person class is
              created. This ensures that every instance of the class starts with
              the necessary information.
            </CardBody>
          </Card>
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Code Example
              </Heading>
              <Text mb={3}>
                In this code example, we'll be creating a class to represent a
                person. Let's brainstorm what attributes and methods a person
                could have.
              </Text>
              <Text fontWeight="bold">Attributes:</Text>
              <UnorderedList mb={3}>
                <ListItem>Name</ListItem>
                <ListItem>Age</ListItem>
              </UnorderedList>
              <Text fontWeight="bold">Methods:</Text>
              <UnorderedList mb={3}>
                <ListItem>Introduce</ListItem>
                <ListItem>Celebrate birthday</ListItem>
              </UnorderedList>
              <CodeBlock
                codeString={`class Person:\n\tdef __init__(self, name, age):\n\t\t# The constructor initializes attributes when an object is created\n\t\tself.name = name\n\t\tself.age = age\n\n\tdef introduce(self):\n\t\t# This method returns a formatted introduction string\n\t\treturn f"Hello, my name is {self.name} and I am {self.age} years old."\n\n\tdef celebrate_birthday(self):\n\t\t# This method increments the age attribute by 1\n\t\tself.age += 1\n\t\treturn f"Happy birthday! Now I am {self.age} years old."\n\n# Creating an instance of the Person class\nperson1 = Person("Alice", 30) # "Alice" and 30 will be passed as the arguments for the parameters name and age respectively\n\n# Accessing attributes and methods of the object\nprint(person1.introduce())  # Output: "Hello, my name is Alice and I am 30 years old."\nprint(person1.celebrate_birthday())  # Output: "Happy birthday! Now I am 31 years old."`}
                language="python"
              />
            </CardBody>
          </Card>
        </SiteCard>

        <SiteCard mb={10}>
          <Heading size="md" color="white">
            The Implicit Self Parameter
          </Heading>
          <Divider my={4} borderColor="blue.400" borderWidth="1px" />
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              You may have noticed that every method in our Person class had a
              "self" parameter, even if the function seemingly didn't take in
              any arguments. In Python, the self parameter is a conventional
              name used within methods of a class to refer to the instance of
              the class itself. It's the first parameter passed to instance
              methods and represents the object on which the method is called.
              By convention, you should name this parameter self, but it's not a
              strict requirement – you could technically name it differently,
              although it's recommended to stick with the convention. The
              purpose of the self parameter is to enable methods to access and
              manipulate the attributes and methods of the instance to which
              they belong. When you call a method on an object, Python
              automatically passes the object as the first argument to the
              method using the self parameter. This allows the method to work
              with the specific data stored in that instance. For example, in a
              class representing a Person, the self parameter enables methods to
              access the attributes of that specific person object. Without
              self, methods wouldn't know which instance's data they should
              operate on.
            </CardBody>
          </Card>
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Code Example
              </Heading>
              <CodeBlock
                codeString={`class Person:\n\tdef __init__(self, name, age):\n\t\tself.name = name\n\t\tself.age = age\n\n\tdef introduce(self):\n\t\treturn f"Hello, my name is {self.name} and I am {self.age} years old."\n\n\tdef celebrate_birthday(self):\n\t\tself.age += 1\n\t\treturn f"Happy birthday! Now I am {self.age} years old."\n\n# Creating an instance of the Person class\nperson1 = Person("Alice", 30)\n\n# Example 1: Implicit use of self\nintro_msg = person1.introduce()  # Implicitly passes person1 as self\nprint(intro_msg)  # Output: "Hello, my name is Alice and I am 30 years old."\n\n# Example 2: Explicit use of self\nbirthday_msg = Person.celebrate_birthday(person1)  # Explicitly passing person1 as self\nprint(birthday_msg)  # Output: "Happy birthday! Now I am 31 years old."`}
                language="python"
              />
            </CardBody>
          </Card>
        </SiteCard>

        <SiteCard mb={10}>
          <Heading size="md" color="white">
            Inheritance
          </Heading>
          <Divider my={4} borderColor="blue.400" borderWidth="1px" />
          <Card bgColor="gray.800" mb={5}>
            <CardBody color="white">
              In Python, inheritance is a fundamental concept in object-oriented
              programming that allows you to create a new class based on an
              existing class. The new class, known as the subclass or derived
              class, inherits the attributes and methods of the existing class,
              known as the base class or parent class. This mechanism enables
              you to create a hierarchy of classes with shared characteristics
              and behaviors. Inheritance facilitates code reuse and
              organization. By defining common attributes and methods in a base
              class, you can avoid redundant code in multiple subclasses.
              Subclasses can then extend or specialize the functionality of the
              base class by adding new attributes or methods or overriding
              existing ones. In essence, inheritance allows you to model
              relationships between classes in a hierarchical manner, where more
              specific classes inherit properties from more general ones. This
              promotes code modularity, maintainability, and scalability, as
              changes made to the base class automatically affect all its
              subclasses.
            </CardBody>
          </Card>
          <Card bgColor="gray.800">
            <CardBody color="white">
              <Heading color="white" size="md" mb={3}>
                Code Example
              </Heading>
              <CodeBlock
                codeString={`class Person:\n\tdef __init__(self, name, age):\n\t\tself.name = name\n\t\tself.age = age\n\n\tdef introduce(self):\n\t\treturn f"Hello, my name is {self.name} and I am {self.age} years old."\n\nclass Student(Person):\n\tdef __init__(self, name, age, student_id):\n\t\tsuper().__init__(name, age)\n\t\tself.student_id = student_id\n\n\tdef study(self, subject):\n\t\treturn f"{self.name} is studying {subject} as a student."\n\n# Creating an instance of the Student class\nstudent1 = Student("Bob", 20, "12345")\n\n# Accessing attributes and methods of the Student class and inherited methods from the Person class\nprint(student1.introduce())  # Output: "Hello, my name is Bob and I am 20 years old."\nprint(student1.study("Math"))  # Output: "Bob is studying Math as a student."`}
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

export default ObjectOriented;
