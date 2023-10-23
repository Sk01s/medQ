import React from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import {
    qModalState,
    quickViewProductState,
    productsState,
} from "../../utils/recoil-atoms";
import calculatePersentage from "../../utils/calculatePercentage";

const ProductsQuickViewModal = () => {
    const [quantity, setQuantity] = React.useState(1);
    const [qModal, setQModal] = useRecoilState(qModalState);
    const [quickViewProduct] = useRecoilState(quickViewProductState);
    const [cartProducts, setCartProducts] = useRecoilState(productsState);

    const toggleModal = () => {
        setQModal(!qModal);
    };

    const addToCartWithQty = () => {
        let getCarts = JSON.parse(localStorage.getItem("myCart"));
        let existed_item_index = -1;
        if (getCarts || getCarts != null) {
            existed_item_index = getCarts.findIndex(
                (item) => item._id === quickViewProduct._id
            );
        }

        if (existed_item_index !== -1) {
            const updatedCarts = JSON.parse(JSON.stringify(getCarts));
            updatedCarts[existed_item_index].quantity += quantity;
            localStorage.setItem("myCart", JSON.stringify(updatedCarts));

            toast.success("Updated the cart successfully", {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } else {
            let cartProducts = new Array();
            if (localStorage.getItem("myCart")) {
                cartProducts = JSON.parse(localStorage.getItem("myCart"));
            }
            let dataWQty = Object.assign({}, quickViewProduct, {
                quantity: quantity,
            });
            let newCartProducts = [...cartProducts, dataWQty];

            localStorage.setItem("myCart", JSON.stringify(newCartProducts));
            const allCarts = JSON.parse(localStorage.getItem("myCart"));
            setCartProducts(allCarts);
            toast.success("Added to the cart successfully", {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
        setQModal(!qModal);

        // console.log(cartProducts)
    };
    return (
        <div
            className={`modal fade productsQuickView ${qModal ? "show" : null}`}
            id="shoppingCartModal"
            style={{ display: "block", paddingRight: "15px" }}
            tabIndex="-1"
            aria-modal="true"
            role="dialog"
        >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <button
                        onClick={toggleModal}
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">
                            <i className="bx bx-x"></i>
                        </span>
                    </button>

                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="products-image">
                                <img
                                    src={quickViewProduct.mediaUrl}
                                    alt={quickViewProduct.name}
                                />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="products-content">
                                <h3>
                                    <Link
                                        href="/product/[id]"
                                        as={`/product/${quickViewProduct._id}`}
                                    >
                                        <a>{quickViewProduct.name}</a>
                                    </Link>
                                </h3>

                                <div className="price">
                                    {quickViewProduct.onSale ? (
                                        <div>
                                            <span className="old-price">
                                                ${quickViewProduct.price}
                                            </span>
                                            <span className="new-price">
                                                $
                                                {calculatePersentage(
                                                    quickViewProduct.price,
                                                    quickViewProduct.onOffer
                                                )}
                                            </span>
                                        </div>
                                    ) : (
                                        <span className="new-price">
                                            ${quickViewProduct.price}
                                        </span>
                                    )}
                                </div>

                                <div className="products-review">
                                    <div className="rating">
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                    </div>
                                    <Link
                                        href="/product/[id]"
                                        as={`/product/${quickViewProduct._id}`}
                                    >
                                        <a className="rating-count">
                                            3 reviews
                                        </a>
                                    </Link>
                                </div>

                                <ul className="products-info">
                                    <li>
                                        <span>Vendor:</span>{" "}
                                        <Link href="#">
                                            <a>Lereve</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <span>Availability:</span>{" "}
                                        <Link href="#">
                                            <a>In stock (7 items)</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <span>Products Type:</span>{" "}
                                        <Link
                                            href={`/products?term=${quickViewProduct.productType}`}
                                        >
                                            <a>
                                                {quickViewProduct.productType}
                                            </a>
                                        </Link>
                                    </li>
                                </ul>

                                <div className="products-color-switch">
                                    <h4>Color:</h4>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a
                                                    data-toggle="tooltip"
                                                    data-placement="top"
                                                    title="Black"
                                                    className="color-black"
                                                ></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a
                                                    data-toggle="tooltip"
                                                    data-placement="top"
                                                    title="White"
                                                    className="color-white"
                                                ></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a
                                                    data-toggle="tooltip"
                                                    data-placement="top"
                                                    title="Green"
                                                    className="color-green"
                                                ></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a
                                                    data-toggle="tooltip"
                                                    data-placement="top"
                                                    title="Yellow Green"
                                                    className="color-yellowgreen"
                                                ></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a
                                                    data-toggle="tooltip"
                                                    data-placement="top"
                                                    title="Teal"
                                                    className="color-teal"
                                                ></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="products-size-wrapper">
                                    <h4>Size:</h4>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a>XS</a>
                                            </Link>
                                        </li>
                                        <li className="active">
                                            <Link href="#">
                                                <a>S</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>M</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>XL</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>XXL</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="products-add-to-cart">
                                    <div className="input-counter">
                                        {/* <span className="minus-btn"><i className='bx bx-minus'></i></span> */}
                                        <input
                                            onChange={(e) =>
                                                setQuantity(
                                                    Number(e.target.value)
                                                )
                                            }
                                            value={quantity}
                                            type="number"
                                            min="1"
                                        />
                                        {/* <span className="plus-btn"><i className='bx bx-plus'></i></span> */}
                                    </div>

                                    <button
                                        onClick={addToCartWithQty}
                                        type="submit"
                                        className="default-btn"
                                    >
                                        <i className="flaticon-trolley"></i> Add
                                        to Cart
                                    </button>
                                </div>

                                <Link href="#">
                                    <a className="view-full-info">
                                        or View Full Info
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsQuickViewModal;
