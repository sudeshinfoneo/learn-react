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
              <div className="container mt-4">
                <div className="row g-4">
                    {
                        product && product.map((el, index) => (
                            <div className="card border m-1" style={{ width: 275 }} key={index}>
                                <>
                                    <div className="card-body text center">
                                        <h5 className="card-id text-center" style={{ fontSize: 15 }}><b>Id:</b> {el.id}</h5>
                                        <h6 className="card-title text-center" style={{ fontSize: 12 }}><b>Title:</b> {el.title}</h6>
                                        <img src={el.image} alt={el.title} className="mx-auto d-block" style={{ width: 200, height: 200 }} />
                                        <p className="card-description" style={{ fontSize: 10 }}><b>Description:</b> {el.description}</p>
                                        <p className="card-category" style={{ fontSize: 11 }}><b>Category:</b> {el.category}</p>
                                        <div className="card-rating">
                                            <p className="card-rate" style={{ fontSize: 10 }}><b>Rating:</b> {el.rating?.rate || 'N/A'} </p>
                                            <p className="card-count" style={{ fontSize: 10 }}><b>Count</b> {el.rating?.count || 'N/A'} </p>
                                        </div>
                                        <h6 className="card-price" style={{ fontSize: 11 }}>Price: {el.price}</h6>
                                        <a href="#" className="btn btn-primary d-flex justify-content-center align-items-center" style={{height: '5vh' }}><b>Buy Now</b></a>
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