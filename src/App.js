import React , {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
//import {createRoot} from 'react-dom/client';
import Header from "./Header";
import Body from "./Body";
import About from "./About";
import ContactUs from "./ContactUs";
import Eroor from "./Eroor";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router";
import ResturantMenu from "./ResturantMenu";
const Grocery = lazy(()=>import("./Grocery"));
const AppLayout = () =>{
    return(
        <div >
            <Header/>
            <Outlet/>
            

        </div>
    );
};
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[{
            path:"/",
            element:<Body />,},{
            path:"/about",
            element:<About/>,
        },{
            path:"/grocery",
            element:<Suspense fallback={<h1>Loading</h1>} ><Grocery/></Suspense>,
        },

        {
            path:"/contact",
            element:<ContactUs/>,
        },
        {
            path:"/resturant/:resId",
            element:<ResturantMenu/>,
        },],
        errorElement:<Eroor/>,
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


