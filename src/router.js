import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/project";

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


])

export default Router;