import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";
import Users from "./components/Users";
import Todos from "./components/Todos";
import Album from "./components/Album";
import Photo from "./components/Photo";
import Practice from "./components/Practice";
import Counter from "./components/Counter";
import Product from "./components/Product";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/sidebar',
        element: <Sidebar />
    },
    {
        path: '/users',
        element: <Users />
    },
    {
        path: '/todos',
        element: <Todos />
    },
    {
        path: '/album',
        element: <Album />
    },
    {
        path: '/photo',
        element: <Photo />
    },
    {
        path: '/practice',
        element: <Practice />
    },
    {
        path: '/counter',
        element: <Counter />
    },
    {
        path: '/product',
        element: <Product />
    }

])

export default Router;