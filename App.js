# React.JS-Day3

import React from 'react';
import FunctionalState from './FunctionalState';
import ClassState from './ClassState';
import { Box, VStack } from '@chakra-ui/react';

function App() {
  return (
    <Box
      p={5}
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100vh"
      bg="gray.50"
    >
      <VStack spacing={8}>
        <FunctionalState />
        <ClassState />
      </VStack>
    </Box>
  );
}

export default App;
