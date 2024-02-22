import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Root from './Pages/Root/Root';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Providers/AuthProvider';
import AddProduct from './Pages/AddProduct/AddProduct';
import MyCart from './Pages/MyCart/MyCart';
import PrivateRoute from './Route/PrivateRoute/PrivateRoute';
import Details from './Pages/Details/Details';
import UpdateProduct from './Pages/UpdateProduct/UpdateProduct';
import AllProducts from './Pages/AllProducts/AllProducts';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage> ,
    children:[
      {
        path:"/",
        element: <Home></Home>,
        loader: () => fetch('https://fashion-fusion-server.vercel.app/clothes')


      },
       
      {
        path: "/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) => fetch(`https://fashion-fusion-server.vercel.app/clothes/${params.id}`)
      },

      {
        path: "/update/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => fetch(`https://fashion-fusion-server.vercel.app/clothes/${params.id}`)
      } ,
     
      {
        path:"/login",
        element:<Login></Login>
      },

      {
        path:"/addProduct",
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },

      {
        path:"/myCart",
        element:<MyCart></MyCart>,
        loader: () => fetch('https://fashion-fusion-server.vercel.app/cart')
      },

      
      {
        path:"/allProducts",
        element:<AllProducts></AllProducts>,
     
      },
      
      // {
      //   path:"/gallery",
      //   element: <PrivateRoute><Gallery></Gallery></PrivateRoute>
      // },

      {
        path:"/register",
        element: <Register></Register>
      },
      
    ]
  },

 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
   
  </React.StrictMode>,
)