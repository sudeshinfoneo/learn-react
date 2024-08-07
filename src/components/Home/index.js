import { Link } from "react-router-dom";
import Img1 from '../../assets/imgs/img-1.jpg';
import Img2 from '../../assets/imgs/img-2.jpg';
import Img3 from '../../assets/imgs/img-3.jpg';
import Img4 from '../../assets/imgs/img-4.jpg';
import Blog6 from '../../assets/imgs/blog-6.jpg';
import Blog2 from '../../assets/imgs/blog-2.jpg';
import Blog3 from '../../assets/imgs/blog-3.jpg';
import Blog4 from '../../assets/imgs/blog-4.jpg';
import Blog5 from '../../assets/imgs/blog-5.jpg';
import Blog1 from '../../assets/imgs/blog-1.jpg';
import Blog7 from '../../assets/imgs/blog-7.jpg';
import Logo from '../../assets/imgs/logo.svg';
import Avatar from '../../assets/imgs/avatar.jpg';
import Insta1 from '../../assets/imgs/insta-1.jpg';
import Insta2 from '../../assets/imgs/insta-2.jpg';
import Insta3 from '../../assets/imgs/insta-3.jpg';
import Insta4 from '../../assets/imgs/insta-4.jpg';
import Insta5 from '../../assets/imgs/insta-5.jpg';
import Insta6 from '../../assets/imgs/insta-6.jpg';

const Home = (props) => {
    return (
        <>
            <nav class="navbar navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src={Logo} alt="" />
                    </a>
                    <div class="socials">
                        <a href="javascript:void(0)"><i class="ti-facebook"></i></a>
                        <a href="javascript:void(0)"><i class="ti-twitter"></i></a>
                        <a href="javascript:void(0)"><i class="ti-pinterest-alt"></i></a>
                        <a href="javascript:void(0)"><i class="ti-instagram"></i></a>
                        <a href="javascript:void(0)"><i class="ti-youtube"></i></a>
                    </div>
                </div>
            </nav>

            <nav className="navbar custom-navbar navbar-expand-md navbar-light bg-primary sticky-top">
                <div className="container">
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="no-sidebar.html">No Sidebar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="single-post.html">Single Post</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="components.html" className="ml-4 btn btn-dark mt-1 btn-sm">Components</a>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container">
                <section>
                    <div className="feature-posts">
                        <a href="single-post.html" className="feature-post-item">
                            <span>Featured Posts</span>
                        </a>
                        <a href="single-post.html" className="feature-post-item">
                            <img src={Img1} className="w-100" alt="" />
                            <div className="feature-post-caption">Incidunt Quaerat</div>
                        </a>
                        <a href="single-post.html" className="feature-post-item">
                            <img src={Img2} className="w-100" alt="" />
                            <div className="feature-post-caption">Culpa Ducimus</div>
                        </a>
                        <a href="single-post.html" className="feature-post-item">
                            <img src={Img3} className="w-100" alt="" />
                            <div className="feature-post-caption">Temporibus Simile</div>
                        </a>
                        <a href="single-post.html" className="feature-post-item">
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

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card text-center mb-5">
                                    <div className="card-header p-0">
                                        <div className="blog-media">
                                            <img src={Blog2} alt="" className="w-100" />
                                            <a href="#" className="badge badge-primary">#Placeat</a>
                                        </div>
                                    </div>
                                    <div className="card-body px-0">
                                        <h5 className="card-title mb-2">Voluptates Corporis Placeat</h5>
                                        <small className="small text-muted">January 20 2019
                                            <span className="px-2">-</span>
                                            <a href="#" className="text-muted">34 Comments</a>
                                        </small>
                                        <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos saepe dolores et nostrum porro odit reprehenderit animi, est ratione fugit aspernatur ipsum. Nostrum placeat hic saepe voluptatum dicta ipsum beatae.</p>
                                    </div>

                                    <div className="card-footer p-0 text-center">
                                        <a href="single-post.html" className="btn btn-outline-dark btn-sm">READ MORE</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card text-center mb-5">
                                    <div className="card-header p-0">
                                        <div className="blog-media">
                                            <img src={Blog3} alt="" className="w-100" />
                                            <a href="#" className="badge badge-primary">#dolores</a>
                                        </div>
                                    </div>
                                    <div className="card-body px-0">
                                        <h5 className="card-title mb-2">Dolorum Dolores Itaque</h5>
                                        <small className="small text-muted">January 19 2019
                                            <span className="px-2">-</span>
                                            <a href="#" className="text-muted">64 Comments</a>
                                        </small>
                                        <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos saepe dolores et nostrum porro odit reprehenderit animi, est ratione fugit aspernatur ipsum. Nostrum placeat hic saepe voluptatum dicta ipsum beatae.</p>
                                    </div>

                                    <div className="card-footer p-0 text-center">
                                        <a href="single-post.html" className="btn btn-outline-dark btn-sm">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card text-center mb-5">
                                    <div className="card-header p-0">
                                        <div className="blog-media">
                                            <img src={Blog4} alt="" className="w-100" />
                                            <a href="#" className="badge badge-primary">#amet</a>
                                        </div>
                                    </div>
                                    <div className="card-body px-0">
                                        <h5 className="card-title mb-2">Quisquam Dignissimos</h5>
                                        <small className="small text-muted">January 17 2019
                                            <span className="px-2">-</span>
                                            <a href="#" className="text-muted">93 Comments</a>
                                        </small>
                                        <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos saepe dolores et nostrum porro odit reprehenderit animi, est ratione fugit aspernatur ipsum. Nostrum placeat hic saepe voluptatum dicta ipsum beatae.</p>
                                    </div>

                                    <div className="card-footer p-0 text-center">
                                        <a href="single-post.html" className="btn btn-outline-dark btn-sm">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card text-center mb-5">
                                    <div className="card-header p-0">
                                        <div className="blog-media">
                                            <img src={Blog5} alt="" className="w-100" />
                                            <a href="#" className="badge badge-primary">#lorem</a>
                                        </div>
                                    </div>
                                    <div className="card-body px-0">
                                        <h5 className="card-title mb-2">Voluptas Optio Soluta</h5>
                                        <small className="small text-muted">January 15 2019
                                            <span className="px-2">-</span>
                                            <a href="#" className="text-muted">112 Comments</a>
                                        </small>
                                        <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos saepe dolores et nostrum porro odit reprehenderit animi, est ratione fugit aspernatur ipsum. Nostrum placeat hic saepe voluptatum dicta ipsum beatae.</p>
                                    </div>

                                    <div className="card-footer p-0 text-center">
                                        <a href="single-post.html" className="btn btn-outline-dark btn-sm">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card text-center mb-5">
                                    <div className="card-header p-0">
                                        <div className="blog-media">
                                            <img src={Blog1} alt="" className="w-100" />
                                            <a href="#" className="badge badge-primary">#lipsum</a>
                                        </div>
                                    </div>
                                    <div className="card-body px-0">
                                        <h5 className="card-title mb-2">Voluptates Corporis Placeat</h5>
                                        <small className="small text-muted">January 14 2019
                                            <span className="px-2">-</span>
                                            <a href="#" className="text-muted">120 Comments</a>
                                        </small>
                                        <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos saepe dolores et nostrum porro odit reprehenderit animi, est ratione fugit aspernatur ipsum. Nostrum placeat hic saepe voluptatum dicta ipsum beatae.</p>
                                    </div>

                                    <div className="card-footer p-0 text-center">
                                        <a href="single-post.html" className="btn btn-outline-dark btn-sm">READ MORE</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card text-center mb-5">
                                    <div className="card-header p-0">
                                        <div className="blog-media">
                                            <img src={Blog7} alt="" className="w-100" />
                                            <a href="#" className="badge badge-primary">#Elit</a>
                                        </div>
                                    </div>
                                    <div className="card-body px-0">
                                        <h5 className="card-title mb-2">Praesentium Asperiores</h5>
                                        <small className="small text-muted">January 10 2019
                                            <span className="px-2">-</span>
                                            <a href="#" className="text-muted">143 Comments</a>
                                        </small>
                                        <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos saepe dolores et nostrum porro odit reprehenderit animi, est ratione fugit aspernatur ipsum. Nostrum placeat hic saepe voluptatum dicta ipsum beatae.</p>
                                    </div>

                                    <div className="card-footer p-0 text-center">
                                        <a href="single-post.html" className="btn btn-outline-dark btn-sm">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary btn-block my-4">Load More Posts</button>
                    </div>
                </div>
            </div>


        <div className="page-sidebar text-center">
                <h6 className="sidebar-title section-title mb-4 mt-3">About</h6>
                <img src={Avatar} alt="" className="circle-100 mb-3" />
                <div className="socials mb-3 mt-2">
                    <a href="javascript:void(0)"><i className="ti-facebook"></i></a>
                    <a href="javascript:void(0)"><i className="ti-twitter"></i></a>
                    <a href="javascript:void(0)"><i className="ti-pinterest-alt"></i></a>
                    <a href="javascript:void(0)"><i className="ti-instagram"></i></a>
                    <a href="javascript:void(0)"><i className="ti-youtube"></i></a>
                </div>
                <p>Consectetur adipisicing elit Possimus tempore facilis dolorum veniam impedit nobis. Quia, soluta incidunt nesciunt dolorem reiciendis iusto.</p>
                

                <h6 class="sidebar-title mt-5 mb-4">Newsletter</h6>
                <form action="">
                    <div className="subscribe-wrapper">
                        <input type="email" className="form-control" placeholder="Email Address" />
                        <button type="submit" className="btn btn-primary"><i className="ti-location-arrow"></i></button>
                    </div>
                    </form>
                    <h6 className="sidebar-title mt-5 mb-4">Tags</h6>
                <a href="javascript:void(0)" className="badge badge-primary m-1">#iusto</a>
                <a href="javascript:void(0)" className="badge badge-primary m-1">#quibusdam</a>
                <a href="javascript:void(0)" className="badge badge-primary m-1">#officia</a>
                <a href="javascript:void(0)" className="badge badge-primary m-1">#animi</a>
                <a href="javascript:void(0)" className="badge badge-primary m-1">#mollitia</a>
                <a href="javascript:void(0)" className="badge badge-primary m-1">#quod</a>
                <a href="javascript:void(0)" className="badge badge-primary m-1">#ipsa at</a>
                <a href="javascript:void(0)" className="badge badge-primary m-1">#dolor</a>
                <a href="javascript:void(0)" className="badge badge-primary m-1">#incidunt</a>
                <a href="javascript:void(0)" className="badge badge-primary m-1">#possimus</a>

                <h6 className="sidebar-title mt-5 mb-4">Instagram</h6>
                <div className="row px-3">
                    <div className="col-4 p-1 figure">
                        <a href="#" className="figure-img">
                            <img src={Insta1} alt="" />
                        </a>
                    </div>
                    <div className="col-4 p-1 figure">
                        <a href="#" className="figure-img">
                            <img src={Insta2} alt="" className="w-100 m-0" />
                        </a>
                    </div>  
                    <div className="col-4 p-1 figure">
                        <a href="#" className="figure-img">
                            <img src={Insta3} alt="" className="w-100" />
                        </a>
                    </div>
                    <div className="col-4 p-1 figure">
                        <a href="#" className="figure-img">
                            <img src={Insta4} alt="" className="w-100 m-0" />
                        </a>
                    </div>  
                    <div className="col-4 p-1 figure">
                        <a href="#" className="figure-img">
                            <img src={Insta5} alt="" className="w-100" />
                        </a>
                    </div>
                    <div className="col-4 p-1 figure">
                        <a href="#" className="figure-img">
                            <img src={Insta6} alt="" className="w-100 m-0" />
                        </a>
                    </div>                          
                </div> 

                <figure className="figure mt-5">
                    <a href="single-post.html" className="figure-img">
                        <img src={Img4} alt="" className="w-100" />
                        <figcaption className="figcaption">Laboriosam</figcaption>
                    </a>
                </figure>

                <h6 className="sidebar-title mt-5 mb-4">Popular Posts</h6>
                <div className="card mb-4">
                    <a href="single-post.html" className="overlay-link"></a>
                    <div className="card-header p-0">                                   
                        <div className="blog-media">
                            <img src={Blog6} alt="" className="w-100" />
                            <a href="#" className="badge badge-primary">#Lorem</a>      
                        </div>  
                    </div>
                    <div className="card-body px-0">
                        <h5 className="card-title mb-2">Corporis Placeat</h5>   
                        <small className="small text-muted"><i className="ti-calendar pr-1"></i> January 24 2019
                        </small>
                        <p className="my-2">consectetur adipisicing Cum veritatis minus iustorpo cupiditate voluptas ...</p>
                    </div>      
                </div> 

                
                </div>










        </>
    )
}

export default Home;
