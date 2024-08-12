import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Index";

const Contact = (props) => {

    return (
        <>
            <section id="contact" class="contact section">

                <div className="container" data-aos="fade">
                    <div className="row gy-5 gx-lg-5">
                        <div className="col-lg-4">
                            <div className="info">
                                <h3>Get in touch</h3>
                                <p>Et id eius voluptates atque nihil voluptatem enim in tempore minima sit ad mollitia commodi minus.</p>

                                <div className="info-item d-flex">
                                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                                    <div>
                                        <h4>Location:</h4>
                                        <p>A108 Adam Street, New York, NY 535022</p>
                                    </div>
                                </div>
                                <div className="info-item d-flex">
                                    <i className="bi bi-envelope flex-shrink-0"></i>
                                    <div>
                                        <h4>Email:</h4>
                                        <p>info@example.com</p>
                                    </div>
                                </div>
                                <div className="info-item d-flex">
                                    <i className="bi bi-phone flex-shrink-0"></i>
                                    <div>
                                        <h4>Call:</h4>
                                        <p>+1 5589 55488 55</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required="" />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required="" />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required="" />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" placeholder="Message" required=""></textarea>
                                </div>

                                <div className="text-center"><button type="submit">Send Message</button></div>

                            </form>
                        </div>
                    </div>
                </div>


            </section>


        </>
    )
}

export default Contact;
