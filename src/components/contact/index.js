import { Link } from "react-router-dom";

const Contact = (props) => {
    return(
        <>
        <p>Please contact us. </p>
        <Link to="/">Back to home</Link>
        <br />
        <Link to="/about">About us</Link>
        </>
    )
}

export default Contact;