import Blog2 from '../../assets/imgs/blog-2.jpg';

const PostCard = (props) => {
    const { data } = props

    return (
        <>
            <div className="row">
                {
                    data && data.map((el, index) => (
                        <>
                            <div className="col-lg-6" key={index}>
                                <div className="card text-center mb-5">
                                    <div className="card-header p-0">
                                        <div className="blog-media">
                                            <img src={Blog2} alt="" className="w-100" />
                                            <a href="#" className="badge badge-primary">#Placeat</a>
                                        </div>
                                    </div>
                                    <div className="card-body px-0">
                                        <h5 className="card-title mb-2">{el.title}</h5>
                                        <small className="small text-muted">January 20 2019
                                            <span className="px-2">-</span>
                                            <a href="#" className="text-muted">34 Comments</a>
                                        </small>
                                        <p className="my-2">{ el.body }</p>
                                    </div>

                                    <div className="card-footer p-0 text-center">
                                        <a href="single-post.html" className="btn btn-outline-dark btn-sm">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                }



            </div>
        </>
    )
}

export default PostCard;