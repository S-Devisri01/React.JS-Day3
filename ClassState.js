import React, { Component } from 'react';
import { Box, Button, Text, VStack } from '@chakra-ui/react';

class ClassState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log('Component did mount');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Count updated:', this.state.count);
    }
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  increment = () => this.setState({ count: this.state.count + 1 });

  decrement = () => this.setState({ count: this.state.count - 1 });

  render() {
    return (
      <Box
        textAlign="center"
        p={6}
        bg="green.200"
        borderRadius="lg"
        shadow="md"
        maxW="sm"  // Matching width with FunctionalState
        width="full"  // Ensures full width within the maxW constraint
        m={4}
      >
        <Box bg="green.300" p={4} borderRadius="md">
          <Text fontSize="2xl" fontWeight="bold" color="green.800" mb={4}>
            Class State
          </Text>
          <Text fontSize="4xl" fontWeight="bold" color="green.600" mb={4}>
            {this.state.count}
          </Text>
          <VStack spacing={4}>
            <Button colorScheme="teal" onClick={this.increment} width="150px">
              Increase
            </Button>
            <Button colorScheme="pink" onClick={this.decrement} width="150px">
              Decrease
            </Button>
          </VStack>
        </Box>
      </Box>
    );
  }
}

export default ClassState;
