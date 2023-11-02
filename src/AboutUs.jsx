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
            Descubre nuestra Aplicación
          </Heading>
          <Text fontSize="lg">
            Bienvenido a nuestra plataforma de gestión de tareas, diseñada para
            simplificar tu vida cotidiana. Aquí encontrarás herramientas
            intuitivas y poderosas para administrar tus tareas de manera
            eficiente.
          </Text>
          <VStack align="start" spacing={4}>
            <Heading as="h2" fontSize="2xl" color="teal.500">
              Funcionalidades Destacadas
            </Heading>
            <UnorderedList>
              <ListItem>Visualizar tus tareas de un vistazo</ListItem>
              <ListItem>Crear nuevas tareas con facilidad</ListItem>
              <ListItem>Actualizar y editar detalles de las tareas</ListItem>
              <ListItem>Eliminar tareas cuando estén completadas</ListItem>
            </UnorderedList>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}

export default AboutUs;
