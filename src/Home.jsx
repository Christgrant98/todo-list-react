import { Box, Flex, Heading, Text } from "@chakra-ui/react";

function Home() {
  return (
    <>
      <Box width={'100vw'} height={'92vh'} background={'linear-gradient(to bottom, #bdc3c7, #2c3e50);'}>
        <Flex justifyContent={'center'}>
          <Heading marginTop={10} color={'white'}>Bienvenido a Task List</Heading>
        </Flex>
        <Flex justifyContent={'center'}>
          <Text fontSize='xl' marginTop={2} color={'white'}>El sistema de gestionamiento de tareas del futuro</Text>
        </Flex>
      </Box>
    </>
  )
}

export default Home;