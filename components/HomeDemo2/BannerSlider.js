import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

const BannerSlider = () => {
    return (
        <>
            <div className="home-wrapper-area">
                <div className="container">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Navigation, Pagination]}
                        className="home-slides-two"
                    >
                        <SwiperSlide>
                            <div className="single-wrapper-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="wrapper-content">
                                            <span className="sub-title">Covid19 Products</span>
                                            <h1>Explore Something New! 20% OFF Covid19</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            
                                            <Link href="#">
                                                <a className="default-btn"><i className="flaticon-trolley"></i> Shop Now</a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-12">
                                        <div className="wrapper-image">
                                            <img src="/img/banner/banner-img4.jpg" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-wrapper-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="wrapper-content">
                                            <span className="sub-title">Fast Delivery</span>
                                            <h1>Digital Blood Pressure Monitor! 25+ Brand</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            
                                            <Link href="#">
                                                <a className="default-btn"><i className="flaticon-trolley"></i> Shop Now</a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-12">
                                        <div className="wrapper-image">
                                            <img src="/img/banner/banner-img5.jpg" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default BannerSlider;