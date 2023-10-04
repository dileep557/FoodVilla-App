import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import About from "./component/About";
import Error from "./component/Error";
import Contact from "./component/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestrauntMenu from "./component/RestrauntMenu";

//************************************************************************************************************************************** */

const AppLayout = ()=>{

    return(
     
        
        <>
        <Header />
        <Outlet />
        <Footer />
        </>

     );
}

const appRouter= createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children:[
        {
            path: "/",
            element: <Body />,

        },
        {
            path: "/about",
            element: <About/>
    
        },
        {
            path: "/contact",
            element: <Contact/>
    
        },
        {
            path: "/restraunt/:id",
            element: <RestrauntMenu />

        }
     ],
    },

]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter} />);