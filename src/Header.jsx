import {
  Box,
  Flex,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Links = [
  { name: 'INICIO', url: '/' },
  { name: 'TAREAS', url: '/tareas' },
  { name: 'ACERCA DE NOSOTROS', url: '/about' },
];

const NavLink = (props) => {
  const { children } = props;

  return (
    <Flex
      // px={2}
      // py={1}
      w={200}
      h={'50px'}
      alignItems="center"
      justifyContent="center"
      textColor="white"
      borderRadius={10}
      // borderWidth={2}
      // borderColor={'white'}
      bgColor={'transparent'}
      _hover={{
        textDecoration: 'none',
        bg: 'gray',
        textColor: 'black',
      }}
    >
      {children}
    </Flex>
  );
};

export default function Header() {
  return (
    <>
      {/* <Box
        bgImage="url('https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png')"
        px={4}
        position="relative"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        height={500}
        brightness="40%"
      > */}
        <Box
          padding={5}
          backgroundColor={'gray'}
          // position="absolute"
          h={'8vh'}
          // w={'100%'}
          // marginLeft={15}
          // top={100}
        >
          <Stack
            // spacing={10}
            direction={'column'}
            alignItems={'center'}
            h={'100%'}
            justifyContent="center"
          >
            
            <HStack
              as={'nav'}
              spacing={1}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <Link key={link.name} to={link.url}>
                  <NavLink >
                    {link.name}
                  </NavLink>
                </Link>  
              ))}
            </HStack>
          </Stack>
        </Box>
      {/* </Box> */}
    </>
  );
}
