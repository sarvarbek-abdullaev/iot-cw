import React from 'react'
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router} from "./route.jsx";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Roboto, sans-serif',
  },
  colors: {
    primary: {
      500: '#3498db',
    },
  },
});

createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
);