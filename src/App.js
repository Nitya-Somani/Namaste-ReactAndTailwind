import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Vision from "./components/Vision";
import RestaurantMenu from "./components/RestaurantMenu";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  );
};

const fakeloader =()=>
{
  { console.log("hello i am fake loader  and I have runn.....")}
  return(
   
    <h1>hello i am fake loader !!!!!!!11</h1>
  )
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
        element: <About />
      },
      {
        path: "/Contact",
        element: <Contact/>
      },
      {
        path: "/Vision",
        element: <Vision/>
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
