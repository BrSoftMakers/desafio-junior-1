import { createBrowserRouter, Navigate } from 'react-router-dom'
import { RootLayout } from '../layouts/RootLayout/RootLayout'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [],
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
])
