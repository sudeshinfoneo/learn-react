import { Link } from "react-router-dom";
import Avatar1 from '../../assets/imgs/avatar-1.jpg'


const Practice = (props) => {

    return (
        <>
            <div className="container mt-4">
                <div className="card" style={{ width: 250 }}>
                    <img src={Avatar1} alt="" className="card-img" />
                    <div className="card-body">
                        <h4 className="card-title" style={{ textAlign: "center", color: "red", fontSize: 30 }}>John Deo</h4>
                        <p className="card-text" style={{ textAlign: "center", color: "black", fontSize: 15 }}>John Doe is an engineer</p>
                        <a href="#" class="btn btn-primary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>Click here</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Practice;