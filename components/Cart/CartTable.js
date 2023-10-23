import React from 'react';
import Link from 'next/link';

const CartTable = () => {
    return (
        <section className="cart-area ptb-70">
            <div className="container">
                <form>
                    <div className="cart-table table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Unit Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="product-thumbnail">
                                        <Link href="#">
                                            <a>
                                                <img src="/img/products/products-img1.jpg" alt="item" />
                                            </a>
                                        </Link>
                                    </td>

                                    <td className="product-name">
                                        <Link href="#">
                                            <a>Cosmetic Containers</a>
                                        </Link>
                                    </td>

                                    <td className="product-price">
                                        <span className="unit-amount">$139.00</span>
                                    </td>

                                    <td className="product-quantity">
                                        <div className="input-counter">
                                            <span className="minus-btn"><i className='bx bx-minus'></i></span>
                                            <input type="text" min="1" value="1" />
                                            <span className="plus-btn"><i className='bx bx-plus'></i></span>
                                        </div>
                                    </td>

                                    <td className="product-subtotal">
                                        <span className="subtotal-amount">$139.00</span>
                                        <Link href="#">
                                            <a className="remove"><i className='bx bx-trash'></i></a>
                                        </Link>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="product-thumbnail">
                                        <Link href="#">
                                            <a>
                                                <img src="/img/products/products-img2.jpg" alt="item" />
                                            </a>
                                        </Link>
                                    </td>

                                    <td className="product-name">
                                        <Link href="#">
                                            <a>New Microscope</a>
                                        </Link>
                                    </td>

                                    <td className="product-price">
                                        <span className="unit-amount">$350.00</span>
                                    </td>

                                    <td className="product-quantity">
                                        <div className="input-counter">
                                            <span className="minus-btn"><i className='bx bx-minus'></i></span>
                                            <input type="text" min="1" value="1" />
                                            <span className="plus-btn"><i className='bx bx-plus'></i></span>
                                        </div>
                                    </td>

                                    <td className="product-subtotal">
                                        <span className="subtotal-amount">$350.00</span>

                                        <Link href="#">
                                            <a className="remove"><i className='bx bx-trash'></i></a>
                                        </Link>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="product-thumbnail">
                                        <a href="#">
                                            <img src="/img/products/products-img3.jpg" alt="item" />
                                        </a>
                                    </td>

                                    <td className="product-name">
                                        <Link href="#">
                                            <a>Hearing Aid Device</a>
                                        </Link>
                                    </td>

                                    <td className="product-price">
                                        <span className="unit-amount">$55.00</span>
                                    </td>

                                    <td className="product-quantity">
                                        <div className="input-counter">
                                            <span className="minus-btn"><i className='bx bx-minus'></i></span>
                                            <input type="text" min="1" value="1" />
                                            <span className="plus-btn"><i className='bx bx-plus'></i></span>
                                        </div>
                                    </td>

                                    <td className="product-subtotal">
                                        <span className="subtotal-amount">$55.00</span>

                                        <Link href="#">
                                            <a className="remove"><i className='bx bx-trash'></i></a>
                                        </Link>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="product-thumbnail">
                                        <Link href="#">
                                            <a>
                                                <img src="/img/products/products-img4.jpg" alt="item" />
                                            </a>
                                        </Link>
                                    </td>

                                    <td className="product-name">
                                        <Link href="#">
                                            <a>Metal Stethoscope</a>
                                        </Link>
                                    </td>

                                    <td className="product-price">
                                        <span className="unit-amount">$79.00</span>
                                    </td>

                                    <td className="product-quantity">
                                        <div className="input-counter">
                                            <span className="minus-btn"><i className='bx bx-minus'></i></span>
                                            <input type="text" min="1" value="1" />
                                            <span className="plus-btn"><i className='bx bx-plus'></i></span>
                                        </div>
                                    </td>

                                    <td className="product-subtotal">
                                        <span className="subtotal-amount">$79.00</span>
                                        <Link href="#">
                                            <a className="remove"><i className='bx bx-trash'></i></a>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="cart-buttons">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-sm-7 col-md-7">
                                <div className="shopping-coupon-code">
                                    <input type="text" className="form-control" placeholder="Coupon code" name="coupon-code" id="coupon-code" />
                                    <button type="submit">Apply Coupon</button>
                                </div>
                            </div>

                            <div className="col-lg-5 col-sm-5 col-md-5 text-right">
                                <Link href="#">
                                    <a className="default-btn">
                                        <i className="flaticon-view"></i> Update Cart
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="cart-totals">
                        <h3>Cart Totals</h3>

                        <ul>
                            <li>Subtotal <span>$800.00</span></li>
                            <li>Shipping <span>$30.00</span></li>
                            <li>Total <span>$830.00</span></li>
                        </ul>

                        <Link href="/checkout">
                            <a className="default-btn">
                                <i className="flaticon-trolley"></i> Proceed to Checkout
                            </a>
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default CartTable;