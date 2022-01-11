import React from 'react';
import { Flex, Box, Center, Heading, Text, Container } from '@chakra-ui/react';
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
      <Heading
        size='lg'
        id='small-title'
        color='gray.600'
        fontWeight='extrabold'
      >
        {details.smalltitle}
        <Text
          as='span'
          display='block'
          fontSize='6xl'
          id='big-title'
          color='gray.900'
          fontWeight='bold'
          mb='10'
        >
          {details.bigtitle}
        </Text>
      </Heading>
      <Container bg='yellow.300' maxW='container.md'>
        <Text fontSize='lg'>{details.description}</Text>
      </Container>
    </Flex>
  );
}
