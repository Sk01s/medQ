import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper";

const BannerSlider = () => {
    return (
        <>
            <Swiper 
                navigation={true} 
                effect={"fade"}
                modules={[EffectFade, Navigation]} 
                className="home-slides"
            >
                <SwiperSlide>
                    <div className="single-banner-item">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-5 col-md-12">
                                            <div className="banner-content">
                                                <span className="sub-title">New Arrivals</span>
                                                <h1>Triton Grip Nitrile <span>Gloves</span></h1>
                                                <p>Gloves protect our hands from a variety of things. Nitrile gloves are comfortable to wear.</p>

                                                <div className="btn-box">
                                                    <div className="d-flex align-items-center">
                                                        <Link href="#">
                                                            <a className="default-btn"><i className="flaticon-trolley"></i> Shop Now</a>
                                                        </Link>
                                                        <span className="price">$50.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                
                                        <div className="col-lg-7 col-md-12">
                                            <div className="banner-image text-center">
                                                <img src="/img/banner/banner-img1.png" className="main-image" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="single-banner-item">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-5 col-md-12">
                                            <div className="banner-content">
                                                <span className="sub-title">New Arrivals</span>
                                                <h1>Safety Glasses Protective <span>Glove</span></h1>
                                                <p>Our glasses and protective gloves are very important for personal safety.</p>

                                                <div className="btn-box">
                                                    <div className="d-flex align-items-center">
                                                        <Link href="#">
                                                            <a className="default-btn"><i className="flaticon-trolley"></i> Shop Now</a>
                                                        </Link>
                                                        <span className="price">$79.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                
                                        <div className="col-lg-7 col-md-12">
                                            <div className="banner-image text-center">
                                                <img src="/img/banner/banner-img2.png" className="main-image" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="single-banner-item">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-5 col-md-12">
                                            <div className="banner-content">
                                                <span className="sub-title">New Arrivals</span>
                                                <h1>Protective Surgical <span>Mask</span></h1>
                                                <p>Surgical masks can protect ourselves from various germs. Everyone should use this surgical mask.</p>

                                                <div className="btn-box">
                                                    <div className="d-flex align-items-center">
                                                        <Link href="#">
                                                            <a className="default-btn"><i className="flaticon-trolley"></i> Shop Now</a>
                                                        </Link>
                                                        <span className="price">$30.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                
                                        <div className="col-lg-7 col-md-12">
                                            <div className="banner-image text-center">
                                                <img src="/img/banner/banner-img3.png" className="main-image" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default BannerSlider;