import { Box, Container, Heading, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

export default function CalloutRecord({ details }) {
  return (
    <Box as='section' bg='gray.900'>
      <Flex
        bg='gray.300'
        py='20'
        px='10'
        direction={['column', 'column', 'row']}
      >
        <Flex mr='' direction={['column', 'column', 'column']}>
          <Heading
            size='lg'
            color='gray.400'
            mr={['0', '2rem']}
            fontWeight='bold'
          >
            {details.smallTitle}
            <Text
              as='span'
              d='block'
              fontSize={['6xl', '4xl', '6xl', '8xl']}
              color='yellow.200'
              mb='10'
            >
              {details.bigTitle}
            </Text>
          </Heading>
          <Text color='gray.400' fontSize='xl'>
            {details.description}
          </Text>
        </Flex>

        <Image
          height={details.image.height}
          width={details.image.width}
          src={details.image.url}
          alt={details.smallTitle + details.bigTitle}
        />
      </Flex>
    </Box>
  );
}
