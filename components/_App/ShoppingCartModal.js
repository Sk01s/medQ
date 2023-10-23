import React from "react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { modalState, productsState } from "../../utils/recoil-atoms";
import totalC from "../../utils/totalC";
import { toast } from "react-toastify";

const ShoppingCartModal = ({ products }) => {
    // console.log(totalC(products))
    const [modal, setModal] = useRecoilState(modalState);
    const [cartProducts, setCartProducts] = useRecoilState(productsState);

    const toggleModal = () => {
        setModal(!modal);
    };

    const removeFromCart = (id) => {
        let carts = JSON.parse(localStorage.getItem("myCart"));
        var index = carts.findIndex((x) => x._id == id);
        if (index >= 0) {
            carts.splice(index, 1);
            localStorage.setItem("myCart", JSON.stringify(carts));
            const allCarts = JSON.parse(localStorage.getItem("myCart"));
            setCartProducts(allCarts);

            toast.info("Removed from the cart successfully", {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } else {
            toast.error("Not removed the item from the cart", {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    return (
        <div
            className={`modal right fade shoppingCartModal ${
                modal ? "show" : null
            }`}
            id="shoppingCartModal"
            style={{ display: "block", paddingRight: "15px" }}
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={toggleModal}
                    >
                        <span aria-hidden="true">
                            <i className="bx bx-x"></i>
                        </span>
                    </button>

                    <div className="modal-body">
                        <h3>My Cart ({products ? products.length : 0})</h3>

                        <div className="products-cart-content">
                            {products ? (
                                products.map((product) => (
                                    <div
                                        className="products-cart d-flex align-items-center"
                                        key={product._id}
                                    >
                                        <div className="products-image">
                                            <Link
                                                href="/product/[id]"
                                                as={`/product/${product._id}`}
                                            >
                                                <a>
                                                    <img
                                                        src={product.mediaUrl}
                                                        alt={product.name}
                                                    />
                                                </a>
                                            </Link>
                                        </div>

                                        <div className="products-content">
                                            <h3>
                                                <Link
                                                    href="/product/[id]"
                                                    as={`/product/${product._id}`}
                                                >
                                                    <a>{product.name}</a>
                                                </Link>
                                            </h3>
                                            <div className="products-price">
                                                <span>{product.quantity}</span>
                                                <span>x</span>
                                                <span className="price">
                                                    ${product.price}
                                                </span>
                                            </div>
                                        </div>

                                        <Link href="#">
                                            <a
                                                className="remove-btn"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    removeFromCart(product._id);
                                                }}
                                            >
                                                <i className="bx bx-trash"></i>
                                            </a>
                                        </Link>
                                    </div>
                                ))
                            ) : (
                                <h3>Empty</h3>
                            )}
                        </div>

                        <div className="products-cart-subtotal">
                            <span>Subtotal</span>
                            <span className="subtotal">
                                ${totalC(products)}
                            </span>
                        </div>

                        <div className="products-cart-btn">
                            <Link href="/checkout">
                                <a className="default-btn">
                                    Proceed to Checkout
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCartModal;
