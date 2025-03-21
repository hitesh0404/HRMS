import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Navbar from './Navbar';
import Dashboard from './Dashboard';
export default function Route() {
 return createBrowserRouter([
   {
     path: "/",
     element: (
       <>
         <Navbar />
         <Dashboard/>
       </>
     ),
   },
 ]);
}
