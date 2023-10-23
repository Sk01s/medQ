import React from 'react';
import HotPromotionTimer from './HotPromotionTimer';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const ProductsPromotionStyleTwo = () => {
    return (
        <div className="promotion-feedback-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <HotPromotionTimer />
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="feedback-inner">
                            <h2><span>Customer Review</span></h2>
                            
                            <Swiper
                                slidesPerView={1}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="feedback-slides"
                            >
                                <SwiperSlide>
                                    <div className="single-feedback-item">
                                        <p>“I ordered Saftey equipment at MedQ site. Within 24 hours of ordering, they delivered my products, the quality of the product is very good. I am very happy! ”</p>
                                        <div className="client-info">
                                            <div className="d-flex align-items-center justify-content-center">
                                                <img src="/img/user1.jpg" alt="image" />
                                                <div className="title">
                                                    <h3>Dominick Eakin</h3>
                                                    <span>Counselor</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="single-feedback-item">
                                        <p>“I ordered Saftey equipment at MedQ site. Within 24 hours of ordering, they delivered my products, the quality of the product is very good. I am very happy! ”</p>
                                        <div className="client-info">
                                            <div className="d-flex align-items-center justify-content-center">
                                                <img src="/img/user2.jpg" alt="image" />
                                                <div className="title">
                                                    <h3>Sarah Taylor</h3>
                                                    <span>Counselor</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="single-feedback-item">
                                        <p>“I ordered Saftey equipment at MedQ site. Within 24 hours of ordering, they delivered my products, the quality of the product is very good. I am very happy! ”</p>
                                        <div className="client-info">
                                            <div className="d-flex align-items-center justify-content-center">
                                                <img src="/img/user3.jpg" alt="image" />
                                                <div className="title">
                                                    <h3>James Andy</h3>
                                                    <span>Counselor</span>
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
        </div>
    )
}

export default ProductsPromotionStyleTwo;