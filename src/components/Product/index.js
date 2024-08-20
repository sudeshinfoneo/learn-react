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
            <div className="container">
                <div className='row' >
                    {
                        product && product.map((el, index) => (
                            <>
                                <div className='container mt-2' key={index}>
                                    <h4>id: {el.id}</h4>
                                    <h5>title: {el.title}</h5>
                                    <h6>price: {el.price}</h6>
                                    <p>description: {el.description}</p>
                                    <p>category: {el.category}</p>
                                    <p>image: <img src={el.image} alt={el.title} className="float-end" width="120" height="120" /></p>
                                    <p>rate: {el.rating?.rate || 'N/A'} </p>
                                    <p>count: {el.rating?.count || 'N/A'} </p>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default Product;