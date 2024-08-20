import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Postland1 from '../../assets/imgs/post-landscape-1.jpg'

const Photo = (props) => {
    const [photo, setPhoto] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json()).then(data => {
            setPhoto(data)
        })
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        photo && photo.map((el, index) => (
                            <>
                                <div className="col md-3">
                                    <img src={Postland1} alt="" className="img-thumbnail" key={index} style={{ width: 300, height: 200 }} />
                                    <h3>{ el.title }</h3>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default Photo;