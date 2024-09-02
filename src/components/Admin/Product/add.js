import React from "react";
import { Modal } from "react-bootstrap";

const AddModal = (props) => {
    const { show, handleClose } = props;
    const placeholderImage = "path/to/your/image.jpg";

    return (
        <>
            {/* <div
                className="modal show"
                // className={show ? `modal show`: `modal`}
                style={{ display: 'block', position: 'initial' }}
            > */}

            <Modal show={show} onHide={handleClose}>

                <Modal.Dialog >
                    <Modal.Header closeButton>
                        <Modal.Title>Add Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Product Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Product Price</label>
                                <input type="number" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="productImage" className="form-label">Product Image</label>
                                <div className="border p-1 rounded text-center">
                                    <img src={placeholderImage} alt="" className="img-fluid" id="productImage" />
                                    <div className="mb-2">
                                        <p className="text-muted">Upload or drag an image here</p>
                                        <input type="file" id="imageUpload" className="form-control-file mt-2" accept="image/*" />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </Modal.Body>
                </Modal.Dialog>
            </Modal>


        </>
    )
}

export default AddModal;
