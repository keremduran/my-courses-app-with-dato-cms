import React from 'react';
import {
  Flex,
  Box,
  Center,
  Heading,
  Text,
  Container,
  Button,
  Grid,
  GridItem,
} from '@chakra-ui/react';
export default function CourseHeaderRecord({ details }) {
  return (
    <Flex
      direction='column'
      alignItems='center'
      textAlign='center'
      bg='gray.200'
      id='flex1'
      py='20'
      py='10'
    >
      <Heading size='lg' id='small-title' color='gray.600' fontWeight='bold'>
        {details.smallTitle}
        <Text
          as='span'
          display='block'
          fontSize='6xl'
          id='big-title'
          color='gray.900'
          mb='10'
        >
          {details.bigTitle}
        </Text>
      </Heading>
      <Container maxW='container.md'>
        <Text fontSize='md' color='gray.600'>
          {details.description}
        </Text>
      </Container>
      <Button
        as='a'
        href='#Pricing'
        bg='yellow.300'
        mt='8'
        py='3'
        px='4'
        color='gray'
        fontSize='lg'
        className=''
      >
        {details.buttonText}
      </Button>
    </Flex>
  );
}
