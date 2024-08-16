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
                <div className='row'>
                    {
                        album && album.map((el, index) => (
                            <>
                                <div className='col-md-4'>
                                    <img src={Alb} className="rounded-circle" alt="" key={index} style={{width: 350, height: 250}}/>
                                    <h3> {el.title}</h3>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Album;