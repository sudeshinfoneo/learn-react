import { Link } from "react-router-dom";
import Img1 from '../../assets/imgs/img-1.jpg';
import Img2 from '../../assets/imgs/img-2.jpg';
import Img3 from '../../assets/imgs/img-3.jpg';
import Img4 from '../../assets/imgs/img-4.jpg';
import Blog6 from '../../assets/imgs/blog-6.jpg';
import PostCard from "./PostCard";
import { useEffect, useState } from "react";

const Home = (props) => {
    const [post, setPost] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => {
            setPost(data)
        })
    }, [])


    return (
        <>
            <header className="page-header"></header>
            <div className="container">
                <section>
                    <div className="feature-posts">
                        <a href="#0" className="feature-post-item">
                            <span>Featured Posts</span>
                        </a>
                        <a href="#0" className="feature-post-item">
                            <img src={Img1} className="w-100" alt="" />
                            <div className="feature-post-caption">Incidunt Quaerat</div>
                        </a>
                        <a href="#0" className="feature-post-item">
                            <img src={Img2} className="w-100" alt="" />
                            <div className="feature-post-caption">Culpa Ducimus</div>
                        </a>
                        <a href="#0" className="feature-post-item">
                            <img src={Img3} className="w-100" alt="" />
                            <div className="feature-post-caption">Temporibus Simile</div>
                        </a>
                        <a href="#0" className="feature-post-item">
                            <img src={Img4} className="w-100" alt="" />
                            <div className="feature-post-caption">Adipisicing</div>
                        </a>
                    </div>
                </section>
                <hr />
                <div className="page-container">
                    <div className="page-content">
                        <div className="card">
                            <div className="card-header text-center">
                                <h5 className="card-title">Voluptates Corporis Placeat</h5>
                                <small className="small text-muted">January 24 2019
                                    <span className="px-2">-</span>
                                    <a href="#" className="text-muted">32 Comments</a>
                                </small>
                            </div>
                            <div className="card-body">
                                <div className="blog-media">
                                    <img src={Blog6} alt="" className="w-100" />
                                    <a href="#" className="badge badge-primary">#Salupt</a>
                                </div>
                                <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos saepe dolores et nostrum porro odit reprehenderit animi, est ratione fugit aspernatur ipsum. Nostrum placeat hic saepe voluptatum dicta ipsum beatae.</p>
                            </div>
                            <div className="card-footer d-flex justify-content-between align-items-center flex-basis-0">
                                <button className="btn btn-primary circle-35 mr-4"><i className="ti-back-right"></i></button>
                                <a href="single-post.html" className="btn btn-outline-dark btn-sm">READ MORE</a>
                                <a href="#" className="text-dark small text-muted">By : Joe Mitchell</a>
                            </div>
                        </div>
                        <hr />
                        <PostCard data={post} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
