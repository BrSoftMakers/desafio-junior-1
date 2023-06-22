import { createBrowserRouter, Navigate } from 'react-router-dom'
import { RootLayout } from '../layouts/RootLayout/RootLayout'
import { PetsListing } from '../pages/Pets/PetsListing/PetsListing'
import { PetDetail } from '../pages/Pets/PetDetail/PetDetail'
import { CustomersListing } from '../pages/Customers/CustomersListing/CustomersListing'
import { CustomerDetail } from '../pages/Customers/CustomerDetail/CustomerDetail'

export const routes = createBrowserRouter([
  {
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
      {
        path: '/customers',
        element: <CustomersListing />,
      },
      {
        path: '/customers/:customerId',
        element: <CustomerDetail />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/pets" />,
  },
])
