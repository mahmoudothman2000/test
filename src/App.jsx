import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Notfound from './components/Notfound/Notfound';


// let routers = createBrowserRouter([
//   {path:"" , element: <Layout/> , children:[
//     {index:true , element:<Home/>},
//     {path:"about" , element:<About/>},
//     {path:"contact" , element:<Contact/>},
//     {path:"portfolio" , element:<Portfolio/> , children:[
//       {path:"" , element:""},
//       {path:"" , element:""},
//       {path:"" , element:""},
//     ]},
//     {path:"*" , element:<Notfound/>},
//   ]}

// ])

let routers = createBrowserRouter([
  {path:"" , element: <Layout/> , children:[
    {index:true , element:<Home/>},
    {path:"about" , element:<About/>},
    {path:"contact" , element:<Contact/>},
    {path:"portfolio" , element:<Portfolio/> , children:[
      {path:"" , element:""},
      {path:"" , element:""},
      {path:"" , element:""},
    ]},
    {path:"*" , element:<Notfound/>},
  ]}

])

export default function App() {
  return (<RouterProvider router={routers}></RouterProvider>
  )
}



