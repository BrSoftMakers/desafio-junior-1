import { createBrowserRouter, Navigate } from 'react-router-dom'
import { RootLayout } from '../layouts/RootLayout/RootLayout'
import { PetsListing } from '../pages/Pets/PetsListing'
import { PetDetail } from '../pages/Pets/PetDetail'

export const routes = createBrowserRouter([
  {
    path: '/pets',
    element: <RootLayout />,
    children: [
      {
        path: '/pets',
        element: <PetsListing />,
      },
      {
        path: '/pets/:petId',
        element: <PetDetail />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/pets" />,
  },
])
