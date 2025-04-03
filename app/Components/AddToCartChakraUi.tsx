'use client';

import React from 'react';
import {
  ChakraProvider,
  Box,
  Image,
  Badge,
  Text,
  Button,
  Flex,
  Heading,
  Stack,
} from '@chakra-ui/react';

const AddToCartChakraUi = () => {
  return (
    <ChakraProvider>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        bg="white"
      >
        <Image
          src="https://via.placeholder.com/150"
          alt="Product"
          objectFit="cover"
          w="100%"
          h="200px"
        />

        <Box p="6">
          <Stack spacing="3">
            <Heading size="md">Product Name</Heading>
            <Text color="gray.600">
              This is a short description of the product.
            </Text>
          </Stack>

          <Flex mt="4" justify="space-between" align="center">
            <Text fontSize="lg" fontWeight="bold">
              $99.99
            </Text>
            <Button colorScheme="blue">Add to Cart</Button>
          </Flex>

          <Badge colorScheme="blue" mt="4">
            3
          </Badge>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default AddToCartChakraUi;