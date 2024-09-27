import { useState } from "react";
import { addQuery, resloveQuery } from "../../store/features/query/querySlice";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid'

const Contact = () => {
    const query = useSelector((store) => store.query.query);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        subject: '',
        message: '',
    })

    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required.";
        else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Invalid mobile number.";
        if (!formData.email.trim()) newErrors.email = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid.";
        if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
        if (!formData.message.trim()) newErrors.message = "Message is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('formData:', formData);
            dispatch(addQuery({
                ...formData,
                id: uuidv4()
            }));
            setFormData({
                name: '',
                mobile: '',
                email: '',
                subject: '',
                message: ''
            });
            setShowModal(false);
        }
    };

    const handleCancel = () => {
        setFormData({
            name: '',
            mobile: '',
            email: '',
            subject: '',
            message: ''
        });
        setShowModal(false)
    };

    return (
        <>
            <div className="container mt-4">
                <div className="d-flex justify-content-between align-items-center mt-4">
                    <h3 className="text-center font-weight-bold">Query List of User</h3>
                    <button className="btn btn-success btn-sm" onClick={() => setShowModal(true)}>Add Your Query</button>
                </div>
                <hr className="mt-2" />
                <div className="table-responsive">
                    <div className="table text-center">
                        <table className="table table-sm table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">S.No.</th>
                                    <th scope="col" style={{ whiteSpace: 'nowrap' }}>Full Name</th>
                                    <th scope="col" style={{ whiteSpace: 'nowrap' }}>Mobile No.</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Subject</th>
                                    <th scope="col">Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    query && query.map((el, index) => (
                                        <tr key={el.id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{el.name}</td>
                                            <td>{el.mobile}</td>
                                            <td>{el.email}</td>
                                            <td>{el.subject}</td>
                                            <td>{el.message}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} aria-labelledby="modalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalLabel">Add New Query</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">First Name</label>
                                        <input
                                            type="text"
                                            className={`form-control form-control-sm ${errors.name ? 'is-invalid' : ''}`}
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your First Name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="mobile">Mobile No.</label>
                                        <input
                                            type="text"
                                            className={`form-control form-control-sm ${errors.mobile ? 'is-invalid' : ''}`}
                                            id="mobile"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            placeholder="Enter your Mobile No." />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            className={`form-control form-control-sm ${errors.email ? 'is-invalid' : ''}`}
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your Email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subject">Subject</label>
                                        <input
                                            type="text"
                                            className={`form-control form-control-sm ${errors.subject ? 'is-invalid' : ''}`}
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Enter the Subject" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="2"
                                            placeholder="Type your Message" />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                        <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;
