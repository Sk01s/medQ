import React from 'react';
import Link from 'next/link';

const CategoriesStyleFour = () => {
    return (
        <div className="categories-banner-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="categories-box">
                            <img src="/img/banner-categories/banner-categories-img5.jpg" alt="image" />

                            <div className="content">
                                <h3>Drugs Collection!</h3>
                            </div>
                            
                            <Link href="#">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="categories-box">
                                    <img src="/img/banner-categories/banner-categories-img6.jpg" alt="image" />
        
                                    <div className="content">
                                        <h3>Trending Collections!</h3>
                                    </div>
        
                                    <Link href="#">
                                        <a className="link-btn"></a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="categories-box">
                                    <img src="/img/banner-categories/banner-categories-img7.jpg" alt="image" />
        
                                    <div className="content">
                                        <h3>Sanitizer!</h3>
                                    </div>
        
                                    <Link href="#">
                                        <a className="link-btn"></a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="categories-box">
                                    <img src="/img/banner-categories/banner-categories-img8.jpg" alt="image" />
        
                                    <div className="content">
                                        <h3>Hot Products!</h3>
                                    </div>
        
                                    <Link href="#">
                                        <a className="link-btn"></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoriesStyleFour;