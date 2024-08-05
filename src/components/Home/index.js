import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <>
            <p>Home page <Link to="/about">About a</Link></p>
            <Link to="/contact">Contact us</Link>
        </>
    )
}

export default Home;