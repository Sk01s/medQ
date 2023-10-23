import React from "react";
import Link from "next/link";

const ShoppingWishlistModal = () => {
    return (
        <div className="modal right fade shoppingWishlistModal">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">
                            <i className="bx bx-x"></i>
                        </span>
                    </button>

                    <div className="modal-body">
                        <h3>My Wishlist (3)</h3>

                        <div className="products-cart-content">
                            <div className="products-cart d-flex align-items-center">
                                <div className="products-image">
                                    <Link href="#">
                                        <a>
                                            <img
                                                src="/img/products/products-img1.jpg"
                                                alt="image"
                                            />
                                        </a>
                                    </Link>
                                </div>

                                <div className="products-content">
                                    <h3>
                                        <a href="#">Coronavirus Face Mask</a>
                                    </h3>
                                    <div className="products-price">
                                        <span>1</span>
                                        <span>x</span>
                                        <span className="price">$39.00</span>
                                    </div>
                                </div>

                                <Link href="#">
                                    <a className="remove-btn">
                                        <i className="bx bx-trash"></i>
                                    </a>
                                </Link>
                            </div>

                            <div className="products-cart d-flex align-items-center">
                                <div className="products-image">
                                    <Link href="#">
                                        <a>
                                            <img
                                                src="/img/products/products-img2.jpg"
                                                alt="image"
                                            />
                                        </a>
                                    </Link>
                                </div>

                                <div className="products-content">
                                    <h3>
                                        <Link href="#">
                                            <a>Protective Gloves</a>
                                        </Link>
                                    </h3>
                                    <div className="products-price">
                                        <span>1</span>
                                        <span>x</span>
                                        <span className="price">$99.00</span>
                                    </div>
                                </div>

                                <Link href="#">
                                    <a className="remove-btn">
                                        <i className="bx bx-trash"></i>
                                    </a>
                                </Link>
                            </div>

                            <div className="products-cart d-flex align-items-center">
                                <Link href="#">
                                    <a>
                                        <img
                                            src="/img/products/products-img3.jpg"
                                            alt="image"
                                        />
                                    </a>
                                </Link>

                                <div className="products-content">
                                    <h3>
                                        <Link href="#">
                                            <a>Infrared Thermometer Gun</a>
                                        </Link>
                                    </h3>
                                    <div className="products-price">
                                        <span>1</span>
                                        <span>x</span>
                                        <span className="price">$90.00</span>
                                    </div>
                                </div>

                                <Link href="#">
                                    <a className="remove-btn">
                                        <i className="bx bx-trash"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="products-cart-subtotal">
                            <span>Subtotal</span>
                            <span className="subtotal">$228.00</span>
                        </div>

                        <div className="products-cart-btn">
                            <Link href="#">
                                <a className="default-btn">
                                    View Shopping Cart
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingWishlistModal;
