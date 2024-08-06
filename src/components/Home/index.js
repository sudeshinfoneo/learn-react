import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <>
            <Link to="/about">About </Link><br />
            <Link to="/contact">Contact us</Link><br />
            <Link to="/project">Project</Link>

        </>
    )
}

export default Home;