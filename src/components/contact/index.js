import { Link } from "react-router-dom";

const Contact = (props) => {
    return(
        <>
            
        <Link to="/about">About us</Link>
        <br />
        <Link to="/project">Project</Link>
        <hr />
        <Link to="/">Back to home</Link>
    
        </>
    )
}

export default Contact;