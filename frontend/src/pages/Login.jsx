import React, { useState, useEffect } from 'react'

import { 
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    Card,
    CardBody,
    useDisclosure,
    Flex,
    Text,
    Link,
    Heading,
    useToast
} from '@chakra-ui/react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import CreateAccount from '../components/CreateAccount';
import loginBg from '../assets/login.jpg';

import { useForm } from "react-hook-form";

import { useNavigate } from 'react-router-dom';

import { Backend } from '../utils/utils';

const Login = () => {
    const navigate = useNavigate();
    const toast = useToast();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [showPassword, toggleShowPassword] = useState(false);

    const handlePasswordVisibility = () => {
        if (showPassword) toggleShowPassword(false);
        else toggleShowPassword(true);
    };

    const whoseLoggedIn = async () => {
        const result = await Backend.get('/api/login-info');
        console.log(result);
    };

    const handleLogin = async ({ email: email, password: password }) => {
        console.log('Logging in!');
        console.log(email);
        console.log(password);
        const result = await Backend.post('/api/login', { email, password });
        if (result.data.loggedIn) {
          navigate('/landing');
          toast({
            title: 'Successfully logged in!',
            description: "Happy learning!",
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
        } else {
          toast({
            title: 'Failed to login.',
            description: "Check your login credentials.",
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
        }
        
    };

    useEffect(() => {
        const handleLogout = async () => {
          await Backend.post('/api/logout');
        };
        handleLogout();
    });

    return (
        <Flex bgImage={loginBg} bgRepeat="no-repeat" bgSize="cover" minH='100vh' minW='100vh' bgAttachment="fixed" justifyContent="center" alignItems="center">
          <Card w="400px" h="350px">
            <CardBody p={8}>
              <Heading mb={5} size='lg'>Login</Heading>
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input placeholder='Email' {...register('email')} />
                <FormLabel mt={5}>Password</FormLabel>
                <InputGroup>
                  <Input placeholder='Password' type={showPassword ? "text" : "password"} {...register('password')} />
                  <InputRightElement>
                    <Button
                      onClick={handlePasswordVisibility}
                      h="1.75rem"
                      size="xs"
                      colorScheme="whiteAlpha"
                    >
                      {showPassword ? (
                        <AiFillEye size={22} color="#232323" />
                      ) : (
                        <AiFillEyeInvisible size={22} color="#232323" />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Flex dir="col" justifyContent="space-between" alignItems="center" mt={5}>
                <Link color='teal.500' onClick={onOpen}>
                  <Text>I don't have an account</Text>
                </Link>
                <Button colorScheme="green" onClick={handleSubmit(handleLogin)}>Login</Button>
              </Flex>
              {/* <Button colorScheme="blue" onClick={whoseLoggedIn}>Who's logged in??</Button> */}
            </CardBody>
          </Card>
          <CreateAccount isOpen={isOpen} onClose={onClose} />
        </Flex>
    );
}

export default Login;