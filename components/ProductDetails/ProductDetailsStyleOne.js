import React from 'react';
import Link from 'next/link';
import RelatedProducts from './RelatedProducts';
import ProductImageStyleOne from './ProductImageStyleOne';
import ProductDetailsTab from './ProductDetailsTab';
import { toast } from 'react-toastify'
import { useRecoilState } from 'recoil';
import { productsState } from '../../utils/recoil-atoms';
import calculatePersentage from '../../utils/calculatePercentage';

const ProductDetailsStyleOne = ({product, related}) => {
    const [quantity, setQuantity] = React.useState(1);
    const [cartProducts, setCartProducts] = useRecoilState(productsState);

    const addToCartWithQty = (e) => {
        e.preventDefault()
        let getCarts = JSON.parse(localStorage.getItem('myCart'))
        let existed_item_index = -1
        if(getCarts || getCarts != null){
            existed_item_index = getCarts.findIndex(item => item._id === product._id)
        }

        if (existed_item_index !== -1) {
            const updatedCarts = JSON.parse(JSON.stringify(getCarts));
            updatedCarts[existed_item_index].quantity += quantity;
            localStorage.setItem('myCart', JSON.stringify(updatedCarts));

            toast.success('Updated the cart successfully', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        } else {
            let cartProducts = new Array()
            if(localStorage.getItem('myCart')){
                cartProducts = JSON.parse(localStorage.getItem('myCart'))
            }
            let dataWQty = Object.assign({}, product, {quantity: quantity});
            let newCartProducts = [...cartProducts, dataWQty]
    
            localStorage.setItem('myCart', JSON.stringify(newCartProducts));
            const allCarts = JSON.parse(localStorage.getItem('myCart'))
            setCartProducts(allCarts)
            toast.success('Added to the cart successfully', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        }

        // console.log(cartProducts)
    }

    return (
        <section className="product-details-area pt-70 pb-40">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12">
                        <ProductImageStyleOne {...product} />
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className="products-details-desc">
                            <h3>{product.name}</h3>

                            <div className="price">
                                {
                                    product.onSale ? (
                                        <div>
                                            <span className="old-price">${product.price}</span>
                                            <span className="new-price">${calculatePersentage(product.price, product.onOffer)}</span>
                                        </div>
                                    ) : (<span className="new-price">${product.price}</span>)
                                }
                            </div>

                            <div className="products-review">
                                <div className="rating">
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                </div>
                                <Link href="#">
                                    <a className="rating-count">3 reviews</a>
                                </Link>
                            </div>

                            <ul className="products-info">
                                <li><span>Vendor:</span> <Link href="#"><a>Lereve</a></Link></li>
                                <li><span>Availability:</span> <Link href="#"><a>In stock (7 items)</a></Link></li>
                                <li><span>Products Type:</span> <Link href={`/products?term=${product.productType}`}><a>{product.productType}</a></Link></li>
                            </ul>

                            <div className="products-color-switch">
                                <span>Color:</span>

                                <ul>
                                    <li>
                                        <Link href="#">
                                            <a title="Black" className="color-black"></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a title="White" className="color-white"></a>
                                        </Link>
                                    </li>
                                    <li className="active">
                                        <Link href="#">
                                            <a title="Green" className="color-green"></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a title="Yellow Green" className="color-yellowgreen"></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a title="Teal" className="color-teal"></a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="products-size-wrapper">
                                <span>Size:</span>

                                <ul>
                                    <li><Link href="#"><a>XS</a></Link></li>
                                    <li className="active"><Link href="#"><a>S</a></Link></li>
                                    <li><Link href="#"><a>M</a></Link></li>
                                    <li><Link href="#"><a>XL</a></Link></li>
                                    <li><Link href="#"><a>XXL</a></Link></li>
                                </ul>
                            </div>

                            <div className="products-info-btn">
                                <Link href="/customer-service">
                                    <a>
                                        <i className='bx bxs-truck'></i> Shipping
                                    </a>
                                </Link>

                                <Link href="/contact">
                                    <a>
                                        <i className='bx bx-envelope'></i> Ask about this products
                                    </a>
                                </Link>
                            </div>

                            <div className="products-add-to-cart">
                                <div className="input-counter">
                                    {/* <span className="minus-btn">
                                        <i className='bx bx-minus'></i>
                                    </span> */}
                                     <input onChange={e => setQuantity(Number(e.target.value))} value={quantity} type="number" min="1" />
                                    {/* <span className="plus-btn">
                                        <i className='bx bx-plus'></i>
                                    </span> */}
                                </div>

                                <button onClick={addToCartWithQty} type="submit" className="default-btn">
                                    <i className="flaticon-trolley"></i> Add to Cart
                                </button>
                            </div>

                            <div className="wishlist-btn">
                                <Link href="#">
                                    <a>
                                        <i className='bx bx-heart'></i> Add to Wishlist
                                    </a>
                                </Link>
                            </div>

                            <div className="buy-checkbox-btn">
                                <div className="item">
                                    <input className="inp-cbx" id="cbx" type="checkbox" />
                                    <label className="cbx" htmlFor="cbx">
                                        <span>
                                            <svg width="12px" height="10px" viewBox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                        </span>
                                        <span>I agree with the terms and conditions</span>
                                    </label>
                                </div>

                                <div className="item">
                                    <Link href="#">
                                        <a onClick={addToCartWithQty} className="default-btn">Buy it now!</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <ProductDetailsTab {...product} />
                    </div>
                </div>
            </div>

            <div className="pt-70">
                <RelatedProducts related={related} />
            </div>
        </section>
    )
}

export default ProductDetailsStyleOne;