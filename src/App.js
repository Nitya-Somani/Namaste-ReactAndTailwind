import React from "react";
import React, { lazy ,Suspense  } from 'react';
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Footer from "./components/Footer";


const About = lazy(() =>import("./components/About"));
const Contact = lazy(() =>import("./components/Contact"));
const Vision = lazy(()=>import("./components/Vision"));

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  );
};


// This is how you include the children route in dom and outlet is a component in which on whatebver url we are it gets filled with that component and show that .
//outlet will be replaced by the children component on which url we are 
const ResRouter = createBrowserRouter([ 
  {
    path: "/",
    element: <AppLayout />,
    
    children:[
      {
        path:"/",
        element:<Body/>

      },
      {
        path: "/About",
        element: <Suspense  fallback={<h1>Loading ...</h1>} ><About /></Suspense >
      },
      {
        path: "/Contact",
        element: <Suspense  fallback={<h1>Loading ...</h1>}><Contact/></Suspense >
      },
      {
        path: "/Vision",
        element: <Suspense  fallback={<h1>Loading ...</h1>} ><Vision/></Suspense >
      },
      {
        path: "/Restaurants/:resId",
        element: <RestaurantMenu/>
      }
     
    ],
    errorElement:<Error/>
   
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {ResRouter}/>);
