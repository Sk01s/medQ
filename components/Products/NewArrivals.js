import React from 'react';
import Link from 'next/link';
import calculatePersentage from '../../utils/calculatePercentage';
import { useRecoilState } from 'recoil';
import { qModalState, quickViewProductState } from '../../utils/recoil-atoms';
import AddToCart from '../Common/AddToCart';

const MapProductsToItem = ({products}) => {
    const [qModal, setQModal] = useRecoilState(qModalState);
    const [quickViewProduct, setQuickViewProduct] = useRecoilState(quickViewProductState);

    const toggleModal = (p) => {
        // e.preventDefault()
        setQModal(!qModal);
        setQuickViewProduct(p)
        // console.log(quickViewProduct)
    }
    return products.length ? (products.map(product => (
        <div className="col-lg-3 col-md-4 col-sm-6" key={product._id}>
            <div className="single-products-box" key={product._id}>
                <div className="image">
                    <Link href="/product/[id]" as={`/product/${product._id}`}>
                        <a className="d-block">
                            <img src={product.mediaUrl} alt={product.name} />
                        </a>
                    </Link>

                    <div className="new">New</div>
                    {
                        product.onSale ? (<div className="sale">Sale</div>): ''
                    }

                    <div className="buttons-list">
                        <ul>
                            <li>
                                <AddToCart  product={product} />
                            </li>
                            <li>
                                <div className="wishlist-btn">
                                    <Link href="#">
                                        <a>
                                            <i className='bx bx-heart'></i>
                                            <span className="tooltip-label">Add to Wishlist</span>
                                        </a>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="quick-view-btn">
                                    <Link href="#">
                                        <a
                                            onClick={e => {e.preventDefault(); toggleModal(product)}}
                                        >
                                            <i className='bx bx-search-alt'></i>
                                            <span className="tooltip-label">Quick View</span>
                                        </a>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="content">
                    <h3>
                        <Link href="/product/[id]" as={`/product/${product._id}`}>
                            <a>{product.name}</a>
                        </Link>
                    </h3>
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
                </div>
            </div>
        </div>
    ))) : (
        <h3>Not Found!</h3>
    )
}

const NewArrivals = ({products}) => {
    return (
        <section className="products-area pb-40">
            <div className="container">
                <div className="section-title">
                    <h2>New Arrivals</h2>
                </div>

                <div className="row">
                    <MapProductsToItem products={products} />
                </div>
            </div>
        </section>
    )
}

export default NewArrivals;