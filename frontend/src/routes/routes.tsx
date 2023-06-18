import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Text } from '@chakra-ui/react'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Text fontSize="5xl">Home page</Text>,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
])
