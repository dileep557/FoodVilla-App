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
import Profile from "./component/Profile";
import { lazy, Suspense, useState } from "react";
import Shimmer from "./component/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./component/cart";
import ColorChange from "./component/ColorChange";

//***************************************************************************************************************************************/
//****** <- Import Lazy loading For Instamart -> ***************//
const Instamart = lazy(()=> import("./component/Instamart"));
const AppLayout = ()=>{

    const [user, setuser]= useState({
        name: "Dileep Yadav ",
        email: "yadavdileep557@gmail.com"

    });
       //context Provider is used to update the context value **********//
      // pass the user and setuser to access and update everywhere in App//
    return(
     <Provider store={store}>
        
        <UserContext.Provider
         value={{user: user,
            setuser: setuser
         }}>
        <Header />
        <Outlet />
        <Footer />
        </UserContext.Provider>
        </Provider>

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
            element: <About/>,
            children:[{               //********** To create nested route create children of children ************//

                path: "profile",     // **** do not write /Profile beacause it consider localhost:1234/Profile****//
                element: <Profile /> //************* beacause / indicate root localhost:1234/root **************//
            }]
    
        },
        {
            path: "/contact",
            element: <Contact/>
    
        },
        {
            path: "/restraunt/:id",
            element: <RestrauntMenu />

        },
        {
            path: "/instamart",
            // fallback is props pass it show anything until instamart component is loading //
            element: <Suspense fallback={<Shimmer />}><Instamart/></Suspense>
    
        },
        {
            path: "/cart",
            element: <Cart />

        },
        {
            path: "/color",
            element: <ColorChange />

        },

     ],
    },

]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter} />);