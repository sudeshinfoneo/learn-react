import { useEffect, useState } from "react";

const EditModal = ({ showEdit, handleClose, product, onUpdateProduct }) => {
    const [editedProduct, setEditedProduct] = useState(product || {title: '' });

    useEffect(() => {
        if (product) {
            setEditedProduct(product);
        }
    },[product])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://fakestoreapi.com/products/${product.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(editedProduct),
        })
        .then(res => res.json())
        .then(json => {  
            onUpdateProduct(json);         
            handleClose();
        })
    };
    
    if (!showEdit) return null;

    return(
         <>
         <div className="modal" style={{ display: 'block' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Product</h5>
                            <button type="button" className="btn-close" onClick={handleClose}></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" name="title" value={editedProduct.title} onChange={handleChange} />
                                </div>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EditModal;