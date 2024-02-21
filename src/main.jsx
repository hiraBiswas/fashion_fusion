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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage> ,
    children:[
      {
        path:"/",
        element: <Home></Home>,
        // loader:()=>fetch('/data.json')

      },

      // {
      //   path:"/events/:id",
      //   element:<PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
      //   loader:()=>fetch('/data.json')
      // },
     
      // {
      //   path:"/decoration",
      //   element: <PrivateRoute><ThemeDecoration></ThemeDecoration></PrivateRoute>
      // },

      {
        path:"/login",
        element:<Login></Login>
      },

      {
        path:"/addProduct",
        element:<AddProduct></AddProduct>
      },

      {
        path:"/myCart",
        element:<MyCart></MyCart>
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