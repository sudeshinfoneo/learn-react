import { useEffect, useState } from "react";
import AddModal from "./add";
import DeleteModal from "./delete";
import EditModal from "./edit";

const AdminProduct = (props) => {
    const [product, setProduct] = useState([]);
    const [showAdd, setShowAdd] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [productId, setProductId] = useState(null);
    const [showEdit, setShowEdit] = useState(false);   
    const [currentProduct, setCurrentProduct] = useState(null);   

    const handleCloseAdd = () => setShowAdd(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleCloseEdit = () => setShowEdit(false);

    const handleShowDelete = (id) => {
        setProductId(id);
        setShowDelete(true);
    }

    const handleShowEdit = (product) => {
        setCurrentProduct(product);
        setShowEdit(true);
    }
    
    const handleUpdateProduct = (updatedProduct) => {
        setProduct((prevProducts) =>
            prevProducts.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
        );
    }
    

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
                        <div className="d-flex justify-content-between m-2">
                            <h1>Admin Product</h1>
                            <button className="btn btn-warning" onClick={(e) => setShowAdd(true)}>Create</button>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-secondary">
                                <thead>
                                    <tr>
                                    <th scope="col">Image</th>
                                        <th scope="col">ID</th>
                                        <th scope="col">Title</th>                                        
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        product.map((item) => (
                                            <tr key={item.id}>
                                                <td><img src={item.image} alt="" width="50" /></td>
                                                <td>{item.id}</td>
                                                <td>{item.title}</td>
                                                
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => handleShowDelete(item.id)}>Delete</button>
                                                    <button className="btn btn-warning" onClick={() => handleShowEdit(item)}>Edit</button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <AddModal show={showAdd} handleClose={handleCloseAdd} />
            <DeleteModal showDelete={showDelete} handleClose={handleCloseDelete} productId={productId} setProductId={setProductId}/>
            <EditModal showEdit={showEdit} handleClose={handleCloseEdit} product={currentProduct} onUpdateProduct={handleUpdateProduct}/>

        </>
    );
}

export default AdminProduct;