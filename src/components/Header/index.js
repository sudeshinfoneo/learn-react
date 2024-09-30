
import { Link } from "react-router-dom";
import Login from "../Login";

const Header = (props) => {

    return (
        <>
            <nav className="navbar custom-navbar navbar-expand-md navbar-light bg-primary sticky-top">
                <div className="container">
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link" style={{ whiteSpace: 'nowrap' }}>About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/users" className="nav-link">Users</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/todos" className="nav-link">Todos</Link>
                            </li>
                            <li className="=nav-item">
                                <Link to="/album" className="nav-link">Album</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/filter" className="nav-link">Filter</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/counter" className="nav-link">Counter</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/product" className="nav-link">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/category" className="nav-link">Category</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin/product" className="nav-link">AdminProduct</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/practice" className="nav-link">Practice</Link>
                            </li>
                        </ul>
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Login />
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;