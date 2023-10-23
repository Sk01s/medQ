import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const FeedbackStyleOne = () => {
    return (
        <section className="feedback-area ptb-70 bg-f7f8fa">
            <div className="container">
                <div className="section-title">
                    <h2>What Our Members Are Saying</h2>
                </div>

                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                    }}
                    modules={[Pagination]}
                    className="feedback-slides-two"
                >
                    <SwiperSlide>
                        <div className="single-feedback-box">
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
                        <div className="single-feedback-box">
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
                        <div className="single-feedback-box">
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
        </section>
    )
}

export default FeedbackStyleOne;