import { Link } from "react-router-dom";
import Avatar from '../../assets/imgs/avatar.jpg';
import Insta1 from '../../assets/imgs/insta-1.jpg';
import Insta2 from '../../assets/imgs/insta-2.jpg';
import Insta3 from '../../assets/imgs/insta-3.jpg';
import Insta4 from '../../assets/imgs/insta-4.jpg';
import Insta5 from '../../assets/imgs/insta-5.jpg';
import Insta6 from '../../assets/imgs/insta-6.jpg';
import Img4 from '../../assets/imgs/img-4.jpg';
import Blog6 from '../../assets/imgs/blog-6.jpg';
import Blog1 from '../../assets/imgs/blog-1.jpg';
import Blog2 from '../../assets/imgs/blog-2.jpg';
import Blog3 from '../../assets/imgs/blog-3.jpg';


const Sidebar = (props) => {
    return (
        <>
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

                <div className="media text-left mb-4">
                    <a href="single-post.html" className="overlay-link"></a>
                    <img className="mr-3" src={Blog1} width="100px" alt="Generic placeholder image" />
                    <div className="media-body">
                        <h6 className="mt-0">Nobis Mollitia</h6>
                        <p className="mb-2"> deserunt quisqua...</p>
                        <p className="text-muted small"><i className="ti-calendar pr-1"></i>  January 02 2019</p>
                    </div>
                </div>
                <div className="media text-left mb-4">
                    <a href="single-post.html" className="overlay-link"></a>
                    <img className="mr-3" src={Blog2} width="100px" alt="Generic placeholder image" />
                    <div className="media-body">
                        <h6 className="mt-0">Officiis Laborum</h6>
                        <p className="mb-2"> deserunt quisqua...</p>
                        <p className="text-muted small"><i className="ti-calendar pr-1"></i>  January 10 2019</p>
                    </div>
                </div>
                <div className="media text-left mb-4">
                    <a href="single-post.html" className="overlay-link"></a>
                    <img className="mr-3" src={Blog3} width="100px" alt="Generic placeholder image" />
                    <div className="media-body">
                        <h6 className="mt-0">Sapiente fugit vero</h6>
                        <p className="mb-2"> deserunt ard quisqua...</p>
                        <p className="text-muted small"><i className="ti-calendar pr-1"></i>  January 04 2019</p>
                    </div>
                </div>
                <div className="ad-card d-flex text-center align-items-center justify-content-center">
                    <span href="#" className="font-weight-bold">ADS</span>
                </div>
            </div>

            <div className="instagram-wrapper mt-5">
                <div className="ig-id">
                    <a href="javascript:void(0)">Follow @joe_mitchell On Instagram</a>
                </div>
                <a href="javascript:void(0)" className="insta-item">
                    <img src={Insta1} alt="" className="w-100" />
                    <div className="overlay">
                        <span>
                            <i className="ti-heart"></i> 23
                        </span>
                        <span>
                            <i className="ti-comment"></i> 12
                        </span>
                    </div>
                </a>

                <a href="javascript:void(0)" class="insta-item">
                    <img src={Insta4} alt="" class="w-100" />
                    <div className="overlay">
                        <span>
                            <i className="ti-heart"></i> 23
                        </span>
                        <span>
                            <i className="ti-comment"></i> 12
                        </span>
                    </div>
                </a>
                <a href="javascript:void(0)" className="insta-item">
                    <img src={Insta5} alt="" className="w-100" />
                    <div className="overlay">
                        <span>
                            <i className="ti-heart"></i> 23
                        </span>
                        <span>
                            <i className="ti-comment"></i> 12
                        </span>
                    </div>
                </a>
                <a href="javascript:void(0)" className="insta-item">
                    <img src={Insta5} alt="" className="w-100" />
                    <div className="overlay">
                        <span>
                            <i className="ti-heart"></i> 23
                        </span>
                        <span>
                            <i className="ti-comment"></i> 12
                        </span>
                    </div>
                </a>
                <a href="javascript:void(0)" className="insta-item">
                    <img src={Insta6} alt="" className="w-100" />
                    <div className="overlay">
                        <span>
                            <i className="ti-heart"></i> 23
                        </span>
                        <span>
                            <i className="ti-comment"></i> 12
                        </span>
                    </div>
                </a>
            </div>


        </>
    )
}
export default Sidebar
