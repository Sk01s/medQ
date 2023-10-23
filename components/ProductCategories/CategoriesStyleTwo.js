
import React from 'react';
import Link from 'next/link';

const CategoriesStyleTwo = () => {
    return (
        <div className="categories-area">
            <div className="container">
                <div className="section-title">
                    <h2>Categories</h2>
                </div>

                <div className="row">
                    <div className="col-lg-2 col-sm-4 col-md-4">
                        <div className="single-categories-box">
                            <img src="/img/categories/categories-img1.png" alt="image" />
                            <h3>Diagnostic Sets</h3>
                            <Link href="#">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-4 col-md-4">
                        <div className="single-categories-box">
                            <img src="/img/categories/categories-img2.png" alt="image" />
                            <h3>Antiseptic</h3>
                            <Link href="#">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-4 col-md-4">
                        <div className="single-categories-box">
                            <img src="/img/categories/categories-img3.png" alt="image" />
                            <h3>Microscope</h3>
                            <Link href="#">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-4 col-md-4">
                        <div className="single-categories-box">
                            <img src="/img/categories/categories-img4.png" alt="image" />
                            <h3>Pharmacy</h3>
                            <Link href="#">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-4 col-md-4">
                        <div className="single-categories-box">
                            <img src="/img/categories/categories-img5.png" alt="image" />
                            <h3>Accessories</h3>
                            <Link href="#">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-4 col-md-4">
                        <div className="single-categories-box">
                            <img src="/img/categories/categories-img6.png" alt="image" />
                            <h3>Equipment</h3>
                            <Link href="#">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoriesStyleTwo;