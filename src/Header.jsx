import React from 'react';
import { Box, Flex, Spacer, Text, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Links = [
  { name: 'HOME', url: '/' },
  { name: 'TASKS', url: '/tareas' },
  { name: 'ABOUT US', url: '/about' },
];

const Header = () => {
  return (
    <Box bg="gray.800" py={4} px={8}>
      <Flex alignItems="center">
        <Text fontSize="2xl" fontWeight="bold" color="white">
          TodoListApp
        </Text>
        <Spacer />
        <Flex as="nav" align="center">
          {Links.map((link, index) => (
            <Link key={index} to={link.url} style={{ textDecoration: 'none', marginRight: '20px' }}>
              <ChakraLink fontSize="lg" color="white" _hover={{ textDecoration: 'underline' }}>
                {link.name}
              </ChakraLink>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
