import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Product = (props) => {

    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => {
            setProduct(data)
        })
    }, [])

    return (
        <>
            <div class="container mt-4">
                <div class="row g-4">
                    {
                        product && product.map((el, index) => (
                            <div className="card-body" style={{ width: 250 }} key={index}>
                                <>
                                    <img src={el.image} alt={el.title} className="mx-auto d-block" style={{ width: 200, height: 200 }} />
                                    <div className="card-body">
                                        <h5 className="card-id" style={{ textAlign: "center", color: "teal", fontSize: 15 }}>Id: {el.id}</h5>
                                        <h6 className="card-title" style={{ textAlign: "justify", color: "blue", fontSize: 12 }}>Title: {el.title}</h6>
                                        <p className="card-description" style={{ textAlign: "justify", color: "black", fontSize: 10 }}><b>Description:</b> {el.description}</p>
                                        <p className="card-category" style={{ textAlign: "justify", color: "black", fontSize: 11 }}><b>Category:</b> {el.category}</p>
                                        <div className="card-rating">
                                            <p className="card-rate" style={{ textAlign: "justify", color: "black", fontSize: 10 }}><b>Rating:</b> {el.rating?.rate || 'N/A'} </p>
                                            <p className="care-count" style={{ textAlign: "justify", color: "black", fontSize: 10 }}><b>Count</b> {el.rating?.count || 'N/A'} </p>
                                        </div>
                                        <h6 className="card-price" style={{ textAlign: "justify", color: "black", fontSize: 11 }}>Price: {el.price}</h6>
                                        <a href="#" class="btn btn-primary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}><b>Buy Now</b></a>
                                    </div>
                                </>
                            </div>
                        ))
                    }
                </div>

            </div>

        </>
    )
}
export default Product;