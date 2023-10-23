import React from 'react';
import Link from 'next/link';

const SellingBrandsStyleTwo = () => {
    return (
        <div className="brands-area bg-f7f8fa pt-70 pb-40">
            <div className="container">
                <div className="section-title">
                    <h2>Selling Brands</h2>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-2 col-sm-4 col-md-2 col-6">
                        <div className="single-brands-item">
                            <Link href="#">
                                <a className="d-block"><img src="/img/brands/brands-img1.png" alt="image" /></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-4 col-md-2 col-6">
                        <div className="single-brands-item">
                            <Link href="#">
                                <a className="d-block"><img src="/img/brands/brands-img2.png" alt="image" /></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-4 col-md-2 col-6">
                        <div className="single-brands-item">
                            <Link href="#">
                                <a className="d-block"><img src="/img/brands/brands-img3.png" alt="image" /></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-4 col-md-2 col-6">
                        <div className="single-brands-item">
                            <Link href="#">
                                <a className="d-block"><img src="/img/brands/brands-img4.png" alt="image" /></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-4 col-md-2 col-6">
                        <div className="single-brands-item">
                            <Link href="#">
                                <a className="d-block"><img src="/img/brands/brands-img5.png" alt="image" /></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-4 col-md-2 col-6">
                        <div className="single-brands-item">
                            <Link href="#">
                                <a className="d-block"><img src="/img/brands/brands-img6.png" alt="image" /></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellingBrandsStyleTwo;