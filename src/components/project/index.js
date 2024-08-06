import { Link } from "react-router-dom";
const Project = (props) => {
    return (
        <>

            <div className="container mt-3">
                <h2>Pagination</h2>
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
                <div classNameName="button-group">
                    <button type="button" className="btn btn-secondary">button1</button>
                    <button type="button" className="btn btn-secondary">button2</button>
                    <button type="button" className="btn btn-secondary">button3</button>
                    <br />
                    <button type="button" className="btn btn-primary">button1</button>
                    <button type="button" className="btn btn-primary">button2</button>
                    <button type="button" className="btn btn-primary">button3</button>
                </div>
            </div>
            <hr />
            <p> <Link to="/">Back to home</Link>
            </p>
        </>
    )
}

export default Project;