import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = (props) => {

    const [category, setCategory] = useState('')
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories').then(res => res.json()).then(data => {
            setCategory(data)
        })
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-sm bg-light">
                <a className="navbar-brand" href="#"></a>
                <div className="collapse navbar-collapse" id="navbarNav" style={{ justifyContent: "center" }}>
                    <ul className="navbar-nav">
                        {
                            category && category.map((el, index) => (
                                <>
                                    <li className="nav-item" key={index}>
                                        <a className="nav-link" href="#">{el}</a>
                                    </li>
                                </>
                            ))}
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Category;