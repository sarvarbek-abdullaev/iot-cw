import React from 'react';
import {Box, Flex, Spacer, Container, Text} from '@chakra-ui/react';

import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
      <Box bg="primary.500" p={4}>
      {/*<Box bg="primary.500" p={4} display={{ base: 'none', md: 'flex' }}>*/}
        <Container maxW="container.xl">
          <Flex align="center" maxW="1200px" m="auto">
            <RouterLink to="/" key="/">
              <Text color="white" fontSize="xl" fontWeight="bold">
                Smart Home
              </Text>
            </RouterLink>
            <Spacer />
            <RouterLink to={"/temperature"} key={"/temperature"}>
              <Text color="white" fontSize="md" >
                Temperature
              </Text>
            </RouterLink>
            <RouterLink to={"/humidity"} key={"/humidity"}>
              <Text color="white" fontSize="md" ml={4}>
                Humidity
              </Text>
            </RouterLink>
            <RouterLink to={"/fan"} key={"/fan"}>
                <Text color="white" fontSize="md" ml={4}>
                  Fan
                </Text>
              </RouterLink>
          </Flex>
        </Container>
      </Box>
  );
};

export default Navbar;
