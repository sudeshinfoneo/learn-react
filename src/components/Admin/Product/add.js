import { Modal } from "bootstrap";

const AddModal = (props) => {
    const { show, handleClose } = props;

    return (
        <>
            <div
                className={show ? `modal show`: `modal`}
                style={{ display: 'block', position: 'initial' }}
            >
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
                                <input type="text" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </Modal.Body>
                </Modal.Dialog>
            </div>

        </>
    )
}

export default AddModal;
