import { useEffect, useState } from 'react';
import Alb from '../../assets/imgs/album.jpg'

const Album = (props) => {

    const [album, setAlbum] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums').then(res => res.json()).then(data => {
            setAlbum(data)

        })
    }, [])

    return (
        <>
            <div className="container">
                {
                    album && album.map((el, index) => (
                        <>
                            <img src={Alb} className="img-fluid" alt="" key={index} />
                            <h3> {el.title}</h3>
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default Album;