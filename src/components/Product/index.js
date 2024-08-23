import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";
import Avatar from '../../assets/imgs/avatar-1.jpg'


const Product = (props) => {
    const [product, setProduct] = useState([])
    const [newProduct, setNewProduct] = useState({
        Id: 21,
        title: "New Product",
        description: "lorem ipsum set",
        image: { Avatar },
        category: "electronic",
        price: "13.5",
        rating: {
            rate: 3.9, count: 338
        }
    });

    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => {
            setProduct(data)
        })
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct(prev => ({
            ...prev,
            [name]: value
        }));

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setProduct(prev => [...prev, { ...newProduct, id: prev.length + 1 }]);
        setNewProduct({
            Id: 21,
            title: "",
            description: "",
            image: { Avatar },
            category: "",
            price: "",
            rating: ""
        })
    }

    return (
        <>
            <div className="container mt-4">
                <div className="row g-4">
                    {
                        product && product.map((el, index) => (
                            <div className="card border m-1" style={{ width: 275 }} key={index}>
                                <>
                                    <div className="card-body text center">
                                        <h5 className="card-id text-center" id="title" name="title" value={newProduct.title} onChange={handleChange} style={{ fontSize: 15 }}><b>Id:</b> {el.id}</h5>
                                        <h6 className="card-title text-center" style={{ fontSize: 12 }}><b>Title:</b> {el.title}</h6>
                                        <img src={el.image} alt={el.title} className="mx-auto d-block" style={{ width: 200, height: 200 }} />
                                        <p className="card-description" style={{ fontSize: 10 }}><b>Description:</b> {el.description}</p>
                                        <p className="card-category" style={{ fontSize: 11 }}><b>Category:</b> {el.category}</p>
                                        <div className="card-rating">
                                            <p className="card-rate" style={{ fontSize: 10 }}><b>Rating:</b> {el.rating?.rate || 'N/A'} </p>
                                            <p className="card-count" style={{ fontSize: 10 }}><b>Count:</b> {el.rating?.count || 'N/A'} </p>
                                        </div>
                                        <h6 className="card-price" style={{ fontSize: 11 }}>Price: {el.price}</h6>
                                        <a href="#" className="btn btn-primary d-flex justify-content-center align-items-center" style={{ height: '5vh' }}><b>Buy Now</b></a>
                                    </div>
                                </>

                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="container mt-4">
                <div className="row g-4">
                    <div className="card border m-1" style={{ width: 275 }}>
                        <div className="card-body text-center">
                            <h5 className="card-id text-center" style={{ fontSize: 15 }}><b>Id: </b> {newProduct.Id}</h5>
                            <h6 className="card-title text-center" style={{ fontSize: 12 }}><b>Title:</b> {newProduct.title}</h6>
                            <img src={Avatar} alt={newProduct.title} className="mx-auto d-block" style={{ width: 200, height: 200 }} />
                            <p className="card-description" style={{ textAlign: "justify", fontSize: 10 }}><b>Description:</b> {newProduct.description}</p>
                            <p className="card-category" style={{ textAlign: "justify", fontSize: 11 }}><b>Category:</b> {newProduct.category}</p>
                            <div className="card-rating">
                                <p className="card-rate" style={{ textAlign: "justify", fontSize: 10 }}><b>Rating:</b> {newProduct.rating.rate} </p>
                                <p className="card-count" style={{ textAlign: "justify", fontSize: 10 }}><b>Count:</b> {newProduct.rating.count} </p>
                            </div>
                            <h6 className="card-price" style={{ textAlign: "justify", fontSize: 11 }}>Price: {newProduct.price}</h6>
                            <a href="#" className="btn btn-primary d-flex justify-content-center align-items-center" style={{ height: '5vh' }}><b>Buy Now</b></a>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )

}
export default Product;