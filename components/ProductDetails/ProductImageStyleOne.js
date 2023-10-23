import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const ProductImageStyleOne = ({mediaUrl, name}) => {
    return (
        <div className="products-details-image">
            <Swiper 
                slidesPerView={1}
                navigation={true} 
                modules={[Navigation]} 
                className="products-details-image-slides"
            >
                <SwiperSlide>
                    <img src={mediaUrl} alt={name} />
                </SwiperSlide>

                {/* <SwiperSlide>
                    <img src="/img/products/products-img2.jpg" alt="image" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/img/products/products-img3.jpg" alt="image" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/img/products/products-img4.jpg" alt="image" />
                </SwiperSlide> */}
            </Swiper>
        </div>
    )
}

export default ProductImageStyleOne;