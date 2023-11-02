import { Box, Flex, Heading, List, ListItem, Text, UnorderedList } from "@chakra-ui/react";

function AboutUs() {
  return (
    <>
      <Box width={'100vw'} height={'92vh'} background={'linear-gradient(to bottom, #bdc3c7, #2c3e50);'}>
        <Flex justifyContent={'center'}>
          <Heading marginTop={10} color={'white'}>Acerca de la aplicación</Heading>
        </Flex>
        <Flex justifyContent={'center'}>
          <Text fontSize='xl' marginTop={2} color={'white'}>Este sistema te permite gestionar tus tareas de la forma más apropiada</Text>
        </Flex>
        <Flex justifyContent={'flex-start'} marginLeft={10} marginBottom={5}>
          <Text fontSize='xl' marginTop={2} color={'white'}>Aquí podrás realizar las siguientes acciones:</Text>
        </Flex>
        <Flex justifyContent={'flex-start'} marginLeft={10} marginBottom={10}>
          <UnorderedList textColor={'white'}>
            <ListItem>Ver tus tareas</ListItem>
            <ListItem>Crear una tarea</ListItem>
            <ListItem>Actualizar una tarea</ListItem>
            <ListItem>Eliminar una tarea</ListItem>
          </UnorderedList>
        </Flex>
      </Box>
    </>
  )
}

export default AboutUs;