import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import About from "./component/About";
import Error from "./component/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//************************************************************************************************************************************** */

const AppLayout = ()=>{

    return(
     
        
        <>
        <Header />
        <Body />
        <Footer />
        </>

     );
}

const appRouter= createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>
    },
    {
        path: "/about",
        element: <About/>

    }

])

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter} />);