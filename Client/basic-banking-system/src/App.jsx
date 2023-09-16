import './App.css';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Customers from './components/Customers/Customers';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Transaction from './components/Transaction/Transaction';

let routers = createBrowserRouter([{

  path: '', element: <Layout />, children: [
    { index: true, element: <Home /> },
    { path: 'customers', element: <Customers /> },
    { path: 'transaction', element: <Transaction /> },
  ]

}])
export default function App() {
  return (
    <>

      <RouterProvider router={routers}></RouterProvider>


    </>
  )
}

