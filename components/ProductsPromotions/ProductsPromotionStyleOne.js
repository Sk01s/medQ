import React from 'react';
import Link from 'next/link';

const ProductsPromotionStyleOne = () => {
    return (
        <div className="products-promotions-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-products-promotions-box">
                            <img src="/img/promotions/promotions-img1.jpg" alt="image" />

                            <div className="content">
                                <span className="sub-title">Special Deal</span>
                                <h3>Mega Sale Mela</h3>
                                <span className="discount"><span>up to</span> 70% OFF</span>
                                <Link href="#">
                                    <a className="link-btn">Shop Now <i className="flaticon-next"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-products-promotions-box">
                            <img src="/img/promotions/promotions-img2.jpg" alt="image" />

                            <div className="content">
                                <span className="sub-title">New Arrivals</span>
                                <h3>Hand Washer</h3>
                                <span className="discount"><span>up to</span> $49.00</span>
                                <Link href="#">
                                    <a className="link-btn">Shop Now <i className="flaticon-next"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="single-products-promotions-box">
                            <img src="/img/promotions/promotions-img3.jpg" alt="image" />

                            <div className="content">
                                <span className="sub-title">Hot Collection</span>
                                <h3>Glucose Meter</h3>
                                <span className="discount"><span>up to</span> 20% OFF</span>
                                <Link href="#">
                                    <a className="link-btn">Shop Now <i className="flaticon-next"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsPromotionStyleOne;