import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/project";
import Sidebar from "./components/Sidebar";
import Users from "./components/Users";

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
        path: '/project',
        element: <Project />
    },
    {
        path: '/sidebar',
        element: <Sidebar />
    },
    {
        path: '/users',
        element: <Users />
    }


])

export default Router;