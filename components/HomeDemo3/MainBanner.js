import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="main-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12">
                        <div className="main-banner-content">
                            <span className="sub-title">Premium Quality</span>
                            <h1>Surgical <span>Mask</span> With A Protective Layer</h1>
                            <p>Using a 5 layers surgical mask, we can protect ourselves from various germs. Everyone should use this 5 layers surgical mask.</p>
                            <Link href="#">
                                <a className="default-btn"><i className="flaticon-trolley"></i> Shop Now</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className="main-banner-image">
                            <img src="/img/banner/banner-img6.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;