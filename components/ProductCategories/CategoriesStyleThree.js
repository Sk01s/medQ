
import React from 'react';
import Link from 'next/link';

const CategoriesStyleThree = () => {
    return (
        <div className="banner-categories-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="single-banner-categories-box">
                            <img src="/img/banner-categories/banner-categories-img3.jpg" alt="image" />

                            <div className="content">
                                <span className="sub-title">Personal</span>
                                <h3>
                                    <Link href="#">
                                        <a>Protective <br /> Safety Equipment</a>
                                    </Link>
                                </h3>
                                <div className="btn-box">
                                    <div className="d-flex align-items-center">
                                        <Link href="#">
                                            <a className="default-btn"><i className="flaticon-trolley"></i> Shop Now</a>
                                        </Link>
                                        <span className="price">$49.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="single-banner-categories-box">
                            <img src="/img/banner-categories/banner-categories-img4.jpg" alt="image" />

                            <div className="content">
                                <span className="sub-title">Don't Miss It!</span>
                                <h3>
                                    <Link href="#">
                                        <a>Electronic <br /> Thermometer</a>
                                    </Link>
                                </h3>
                                <div className="btn-box">
                                    <div className="d-flex align-items-center">
                                        <Link href="#">
                                            <a className="default-btn"><i className="flaticon-trolley"></i> Shop Now</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoriesStyleThree;