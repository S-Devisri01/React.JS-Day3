import React, { useState } from 'react';
import { Box, Button, Text, VStack } from '@chakra-ui/react';

function FunctionalState() {
  const [count, setCount] = useState(0);

  return (
    <Box
      textAlign="center"
      p={6}
      bg="blue.200"
      borderRadius="lg"
      shadow="md"
      maxW="sm"  // Matching width with ClassState
      width="full"  // Ensures full width within the maxW constraint
      m={4}
    >
      <Box bg="blue.300" p={4} borderRadius="md">
        <Text fontSize="2xl" fontWeight="bold" color="blue.800" mb={4}>
          Functional State
        </Text>
        <Text fontSize="4xl" fontWeight="bold" color="blue.600" mb={4}>
          {count}
        </Text>
        <VStack spacing={4}>
          <Button colorScheme="teal" onClick={() => setCount(count + 1)} width="150px">
            Increase
          </Button>
          <Button colorScheme="pink" onClick={() => setCount(count - 1)} width="150px">
            Decrease
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}

export default FunctionalState;
