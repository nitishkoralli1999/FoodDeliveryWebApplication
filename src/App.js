import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// React element


const Applayout = ()=> {
    return(
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
{
    path:'/',
    element:<Applayout />,
    errorElement:<Error />,
    children:[
        {
            path:'/',
            element:<Body />,
        },
        {
        path:'/about',
        element:<About />,
        },
    {
        path:'/contact',
        element:<Contact />,
    },
    {
        path:'/Cart',
        element: <Cart />,
    },
    {
        path:"/restaurants/:resId",      //:resId is dynamic where resId is the id of the restraunt
        element:<RestaurantMenu />,
    }
    
     ]
},

])



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);