import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";
import Users from "./components/Users";
import Todos from "./components/Todos";
import Album from "./components/Album";
import Filter from "./components/Filter";
import Counter from "./components/Counter";
import Product from "./components/Product";
import Category from "./components/Category";
import AdminProduct from "./components/Admin/Product";
import Practice from "./components/Practice";

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
        path: '/filter',
        element: <Filter />
    },
    {
        path: '/counter',
        element: <Counter />
    },
    {
        path: '/product',
        element: <Product />
    },
    {
        path: '/category',
        element: <Category />
    },
    {
        path: '/admin/product',
        element: <AdminProduct />
    }, 
    {
        path: '/practice',
        element: <Practice />
    }

])

export default Router;