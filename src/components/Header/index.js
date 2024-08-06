import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="navbar-brand" href="#">Logo</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                            
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Dropdown</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Link</a></li>
                                <li><a class="dropdown-item" href="#">Another link</a></li>
                                <li><a class="dropdown-item" href="#">A third link</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header;