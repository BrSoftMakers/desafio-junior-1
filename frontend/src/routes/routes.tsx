import { createBrowserRouter, Navigate } from 'react-router-dom'
import { RootLayout } from '../layouts/RootLayout/RootLayout'
import { Pets } from '../pages/Pets/Pets'

export const routes = createBrowserRouter([
  {
    path: '/pets',
    element: <RootLayout />,
    children: [
      {
        path: '/pets',
        element: <Pets />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/pets" />,
  },
])
