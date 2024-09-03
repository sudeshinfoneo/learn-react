import { useEffect, useState } from "react";
import AddModal from "./add";

const AdminProduct = (props) => {
    const [product, setProduct] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=8&sort=desc')
            .then(res => res.json())
            .then((json) => {
                setProduct(json)
            })
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Admin Product</h1>
                        <button className="btn btn-warning" onClick={(e) => setShow(true)}>Create Product</button>
                        <button className="btn btn-danger">Delete Product</button>                        
                        <div className="table-responsive">
                            <table className="table table-secondary">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        product.map((item) => (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.title}</td>
                                                <td><img src={item.image} alt="" width={50} height={50}/></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <AddModal show={show} handleClose={handleClose} />
        </>
    );
}

export default AdminProduct;