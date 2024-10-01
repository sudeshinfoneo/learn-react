import React from "react";
import Blog1 from "../../assets/imgs/blog-1.jpg";
import Blog2 from "../../assets/imgs/blog-2.jpg";
import Blog3 from "../../assets/imgs/blog-3.jpg";

const Practice = () => {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Blog1} className="d-block w-100" alt="" style={{ height: '550px' }} />
                    </div>
                    <div className="carousel-item">
                        <img src={Blog2} className="d-block w-100" alt="" style={{ height: '550px' }} />
                    </div>
                    <div className="carousel-item">
                        <img src={Blog3} className="d-block w-100" alt="" style={{ height: '550px' }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <hr />

            <button 
            type="button" 
            class="btn btn-secondary" 
            data-container="body" 
            data-toggle="popover" 
            data-placement="left" 
            data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">  Popover          
            </button>
        </>
    )
}

export default Practice;
