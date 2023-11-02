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
        Bienvenido a nuestra Plataforma de Tareas
      </Heading>
      <Text fontSize="xl" mb={8}>
        La forma más eficiente de gestionar tus tareas diarias.
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
          Características destacadas:
        </Heading>
        <Text>
          - Organiza tus tareas de forma fácil y rápida.
        </Text>
      </Box>
    </Flex>
  );
}

export default Home;
