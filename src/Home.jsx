import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

function Home() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      h="100vh"
      bgGradient="linear(to bottom, #3498db, #2c3e50)"
      color="white"
      textAlign="center"
    >
      <Heading as="h1" size="2xl" mb={4}>
        Welcome to Our Task Management Platform
      </Heading>
      <Text fontSize="xl" mb={8}>
        The most efficient way to manage your daily tasks.
      </Text>
      <Box
        p={8}
        borderRadius="lg"
        boxShadow="xl"
        bg="white"
        color="gray.800"
        textAlign="left"
        maxW="sm"
      >
        <Heading as="h2" size="lg" mb={4}>
          Key Features:
        </Heading>
        <Text>
          - Organize your tasks easily and quickly.
        </Text>
      </Box>
    </Flex>
  );
}

export default Home;
