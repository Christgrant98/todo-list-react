import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

function AboutUs() {
  return (
    <Box bg="gray.200" py={10}>
      <Container maxW="container.lg">
        <VStack spacing={8} alignItems="center">
          <Heading as="h1" fontSize="4xl" color="teal.500">
            Explore Our Application
          </Heading>
          <Text fontSize="lg">
            Welcome to our task management platform, designed to simplify your
            everyday life. Here, you'll find intuitive and powerful tools to
            efficiently manage your tasks.
          </Text>
          <VStack align="start" spacing={4}>
            <Heading as="h2" fontSize="2xl" color="teal.500">
              Key Features
            </Heading>
            <UnorderedList>
              <ListItem>Visualize your tasks at a glance</ListItem>
              <ListItem>Create new tasks with ease</ListItem>
              <ListItem>Update and edit task details</ListItem>
              <ListItem>Delete tasks when completed</ListItem>
            </UnorderedList>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}

export default AboutUs;
