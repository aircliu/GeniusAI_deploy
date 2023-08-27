import React from 'react';

import {
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    Divider,
    Button
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';

const LessonCard = ({ title, imageSrc, route }) => {
    const navigate = useNavigate();

    const navigateToRoute = () => {
        navigate(route);
    };

    return (
        <Card w={400} bg="gray.900" borderWidth={3}>
          <Heading textAlign="center" size="lg" mt={3} color="blue.500">{title}</Heading>
          <CardBody display="flex" justifyContent="center" alignItems="center">
            <Image src={imageSrc}  />
          </CardBody>
          <Divider />
          <CardFooter justifyContent="center">
            <Button colorScheme="blue" w={500} onClick={navigateToRoute}>Navigate</Button>
          </CardFooter>
        </Card>
    );
}

export default LessonCard;