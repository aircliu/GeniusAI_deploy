import React from 'react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Button,
    useToast
  } from '@chakra-ui/react'

import { useForm } from "react-hook-form";

import { Backend } from '../utils/utils';

const CreateAccount = ({ isOpen, onClose }) => {
    const toast = useToast();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async ({ email, password, passwordConfirmation }) => {
        if (password == passwordConfirmation) {
            const result = await Backend.post('/api/create-account', { email, password });
            if (result.data.status == 'Success') {
              toast({
                title: 'Account successfully created!',
                description: "Login using your account details!",
                status: 'success',
                duration: 3000,
                isClosable: true,
              })
              onClose();
            } else {
              toast({
                title: 'Failed to create account.',
                description: "Email is already in use.",
                status: 'error',
                duration: 3000,
                isClosable: true,
              })
            }
        } else {
          toast({
            title: 'Failed to create account.',
            description: "Please ensure the passwords match.",
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
          <ModalHeader>Create Account</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input placeholder='Email' {...register('email')} />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input placeholder='Password' type="password" {...register('password')} />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Confirm Password</FormLabel>
                <Input placeholder='Password' type="password" {...register('passwordConfirmation')} />
            </FormControl>
            </form>
          </ModalBody>
  
          <ModalFooter>
            <Button colorScheme='blue' onClick={handleSubmit(onSubmit)}>
              Create account
            </Button>
          </ModalFooter>
          </ModalContent>
        </Modal>
    );
}

export default CreateAccount;