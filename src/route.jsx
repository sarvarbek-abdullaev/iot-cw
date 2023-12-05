import React from 'react';
import {
  createBrowserRouter,
} from 'react-router-dom';
import {Center, Box, Heading, UnorderedList, ListItem} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';


import Temperature from './components/Temperature.jsx';
import Humidity from './components/Humidity.jsx';
import Fan from './components/Fan.jsx';
import Navbar from './components/Navbar.jsx';
import Fire from "./components/Fire.jsx";

const componentWithNavbar = (Component) => (
  <>
    <Navbar />
    <Fire/>
    {Component && (
      <Center>
        <Component />
      </Center>
    )}
  </>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Route />,
  },
  {
    path: '/temperature',
    element: componentWithNavbar(Temperature),
  },
  {
    path: '/humidity',
    element: componentWithNavbar(Humidity),
  },
  {
    path: '/fan',
    element: componentWithNavbar(Fan),
  },
]);



function Route() {
  return (
    <Center height="100vh">
      <Box textAlign="center">
        <Heading as="h1" mb={4}>
          Smart Home
        </Heading>
        <UnorderedList display="inline-block" textAlign="left" pl={0}>
          <ListItem display="inline-block" mx={2}>
            <RouterLink to="/temperature">Temperature</RouterLink>
          </ListItem>
          <ListItem display="inline-block" mx={2}>
            <RouterLink to="/humidity">Humidity</RouterLink>
          </ListItem>
          <ListItem display="inline-block" mx={2}>
            <RouterLink to="/fan">Fan</RouterLink>
          </ListItem>
        </UnorderedList>
      </Box>
    </Center>
  );
}
