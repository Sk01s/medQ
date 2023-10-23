import React from 'react';
import Link from 'next/link';

const Doctors = () => {
    return (
        <section className="doctors-area pt-70 pb-40">
            <div className="container">
                <div className="section-title">
                    <h2>Meet Our Dedicated Doctors</h2>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-doctors-box">
                            <div className="image">
                                <img src="/img/doctors/doctors-img1.jpg" alt="image" />

                                <ul className="social">
                                    <li><a href="#" target="_blank"><i className='bx bxl-facebook-square'></i></a></li>
                                    <li><a href="#" target="_blank"><i className="bx bxl-twitter"></i></a></li>
                                    <li><a href="#" target="_blank"><i className='bx bxl-instagram-alt'></i></a></li>
                                    <li><a href="#" target="_blank"><i className='bx bxl-linkedin-square'></i></a></li>
                                    <li><a href="#" target="_blank"><i className='bx bxl-pinterest'></i></a></li>
                                </ul>
                            </div>

                            <div className="content">
                                <h3>Lauren Wells</h3>
                                <span>Director</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-doctors-box">
                            <div className="image">
                                <img src="/img/doctors/doctors-img2.jpg" alt="image" />

                                <ul className="social">
                                    <li><a href="#" target="_blank"><i className='bx bxl-facebook-square'></i></a></li>
                                    <li><a href="#" target="_blank"><i className="bx bxl-twitter"></i></a></li>
                                    <li><a href="#" target="_blank"><i className='bx bxl-instagram-alt'></i></a></li>
                                    <li><a href="#" target="_blank"><i className='bx bxl-linkedin-square'></i></a></li>
                                    <li><a href="#" target="_blank"><i className='bx bxl-pinterest'></i></a></li>
                                </ul>
                            </div>

                            <div className="content">
                                <h3>Francis Milligan</h3>
                                <span>CEO & Founder</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-doctors-box">
                            <div className="image">
                                <img src="/img/doctors/doctors-img3.jpg" alt="image" />

                                <ul className="social">
                                    <li><a href="#" target="_blank"><i className='bx bxl-facebook-square'></i></a></li>
                                    <li><a href="#" target="_blank"><i className="bx bxl-twitter"></i></a></li>
                                    <li><a href="#" target="_blank"><i className='bx bxl-instagram-alt'></i></a></li>
                                    <li><a href="#" target="_blank"><i className='bx bxl-linkedin-square'></i></a></li>
                                    <li><a href="#" target="_blank"><i className='bx bxl-pinterest'></i></a></li>
                                </ul>
                            </div>

                            <div className="content">
                                <h3>Kristin Taylor</h3>
                                <span>Administrator</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-doctors-box">
                            <div className="image">
                                <img src="/img/doctors/doctors-img4.jpg" alt="image" />

                                <ul className="social">
                                    <li><a href="#" target="_blank"><i className='bx bxl-facebook-square'></i></a></li>
                                    <li><a href="#" target="_blank"><i className="bx bxl-twitter"></i></a></li>
                                    <li><a href="#" target="_blank"><i className='bx bxl-instagram-alt'></i></a></li>
                                    <li><a href="#" target="_blank"><i className='bx bxl-linkedin-square'></i></a></li>
                                    <li><a href="#" target="_blank"><i className='bx bxl-pinterest'></i></a></li>
                                </ul>
                            </div>

                            <div className="content">
                                <h3>Henry Woods</h3>
                                <span>Chief Officer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Doctors;