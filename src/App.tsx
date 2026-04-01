import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from '@/components/Layout'
import Index from '@/pages/Index'
import NotFound from '@/pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Index />,
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
