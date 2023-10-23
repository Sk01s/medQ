import React from 'react';
import Link from 'next/link';
import CategoriesMegamenu from './CategoriesMegamenu';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const MainBanner = () => {
    return (
        <>
            <div className="main-banner-with-categories">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12">
                            <CategoriesMegamenu />
                        </div>

                        <div className="col-lg-9 col-md-12">
                            <Swiper
                                slidesPerView={1}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="home-slides-three"
                            >
                                <SwiperSlide>
                                    <div className="banner-area bg-1">
                                        <div className="banner-content">
                                            <span className="sub-title">Premium Quality</span>
                                            <h1>Metal <br /> Stethoscope</h1>
                                            <p>The stethoscope is an acoustic medical device, which is used to measure heartbeats.</p>

                                            <div className="btn-box">
                                                <div className="d-flex align-items-center">
                                                    <Link href="#">
                                                        <a className="default-btn"><i className="flaticon-trolley"></i> Shop Now</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="banner-area bg-2">
                                        <div className="banner-content">
                                            <span className="sub-title">Premium Quality</span>
                                            <h1>Covid19 <br /> <span>2020</span> Sanitizer</h1>
                                            <p>The stethoscope is an acoustic medical device, which is used to measure heartbeats.</p>

                                            <div className="btn-box">
                                                <div className="d-flex align-items-center">
                                                    <Link href="#">
                                                        <a className="default-btn"><i className="flaticon-trolley"></i> Shop Now</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainBanner;