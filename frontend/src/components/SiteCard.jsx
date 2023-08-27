import React from 'react';

import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const SiteCard = (props) => {
    return (
        <Card bg="gray.900" borderWidth={3} p={4} borderRadius={5} {...props}>
            {props.children}
        </Card>
    );
}

export default SiteCard;