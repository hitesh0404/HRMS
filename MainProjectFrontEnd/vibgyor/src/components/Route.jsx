import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Home from './Home';
import Login from './Login';
import RegisterPage from './RegisterPage';
import ForgetPassword from './ForgetPassword';
export default function Route() {
 return createBrowserRouter([
   {
     path: "/",
     element: (
       <>
         <Navbar />
         <Home />
       </>
     ),
     children: [
       {
         path: "/login",
         element: (
           <>
             <Login />
           </>
         ),
       },
       {
         path: "/register",
         element: (
           <>
             <RegisterPage />
           </>
         ),
       },
       {
         path: "/forgot-password",
         element: (
           <>
             <ForgetPassword />
           </>
         ),
       },
     ],
   },
   {
     path: "/dashboard",
     element: (
       <>
         <Navbar />
         <Dashboard />
       </>
     ),
   },
   {
     path: "/",
     element: (
       <>
         <Navbar />
       </>
     ),
   },
 ]);
}
