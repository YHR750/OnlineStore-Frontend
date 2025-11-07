import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './components/home.jsx'
import Login from './components/login.jsx'
import Admin from './components/adminpage.jsx'
import SignIn from './components/signin.jsx'
import UserPage from './components/userpage.jsx'
import Details from './components/details.jsx'
import Error from './components/error.jsx'
import ProductRole from './components/productRole.jsx'
import StockDetails from './components/stockDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <Error/>,
  },
  {
    path: '/login',
    element: <Login/>,
    errorElement: <Error/>,
  },
  {
    path: '/admin',
    element: <Admin/>,
    errorElement: <Error/>,
  },
  {
    path: '/signin',
    element: <SignIn/>,
    errorElement: <Error/>,
  },
  {
    path: '/userpage',
    element: <UserPage/>,
    errorElement: <Error/>,
  },
  {
    path: '/shopDetails/:id',
    element: <Details/>,
    errorElement: <Error/>,
  },
  {
    path: '/productrole/:id',
    element: <ProductRole/>,
    errorElement: <Error/>,
  },
  {
    path: '/stockdetails',
    element: <StockDetails/>,
    errorElement: <Error/>,
  }
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
