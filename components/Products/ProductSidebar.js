import React from 'react';
import Link from 'next/link';
import Router from 'next/router'
import { useRouter } from 'next/router'

const ProductSidebar = () => {
    const router = useRouter()
    const { term }  = router.query

    const typeHandler = (term) => {
        Router.push({
            pathname: '/products',
            query: { term: term}
        })
    }

    return (
        <div className="woocommerce-widget-area">
            <div className="woocommerce-widget color-list-widget">
                <h3 className="woocommerce-widget-title">Color</h3>

                <ul className="color-list-row">
                    <li className="active">
                        <Link href="#">
                            <a title="Black" className="color-black"></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a title="Red" className="color-red"></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a title="Yellow" className="color-yellow"></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a title="White" className="color-white"></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a title="Blue" className="color-blue"></a>
                        </Link>
                    </li>
                    <li>
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
                            <a title="Pink" className="color-pink"></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a title="Violet" className="color-violet"></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a title="Blue Violet" className="color-blueviolet"></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a title="Lime" className="color-lime"></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a title="Plum" className="color-plum"></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a title="Teal" className="color-teal"></a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="woocommerce-widget brands-list-widget">
                <h3 className="woocommerce-widget-title">Category</h3>

                <ul className="brands-list-row">
                    <li className={`${(term === 'medical') ? 'active' : null }`}>
                        <Link href="#">
                            <a onClick={e => {e.preventDefault(); typeHandler('medical')}}>Medical Equipment</a>
                        </Link>
                    </li>
                    <li className={`${(term === 'jewelry') ? 'active' : null }`}>
                        <Link href="#">
                            <a onClick={e => {e.preventDefault(); typeHandler('jewelry')}}>Jewelry</a>
                        </Link>
                    </li>
                    <li className={`${(term === 'electronics') ? 'active' : null }`}>
                        <Link href="#">
                            <a onClick={e => {e.preventDefault(); typeHandler('electronics')}}>Electronics</a>
                        </Link>
                    </li>
                    <li className={`${(term === 'furniture') ? 'active' : null }`}>
                        <Link href="#">
                            <a onClick={e => {e.preventDefault(); typeHandler('furniture')}}>Furniture</a>
                        </Link>
                    </li>
                    <li className={`${(term === 'fashion') ? 'active' : null }`}>
                        <Link href="#">
                            <a onClick={e => {e.preventDefault(); typeHandler('fashion')}}>Fashion</a>
                        </Link>
                    </li>
                    <li className={`${(term === 'grocery') ? 'active' : null }`}>
                        <Link href="#">
                            <a onClick={e => {e.preventDefault(); typeHandler('grocery')}}>Grocery</a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="woocommerce-widget woocommerce-ads-widget">
                <img src="/img/ads.jpg" alt="image" />

                <div className="content">
                    <span>New Arrivals</span>
                    <h3>Modern Electronic Thermometer</h3>

                    <Link href="#">
                        <a className="default-btn"><i className="flaticon-trolley"></i> Shop Now</a>
                    </Link>
                </div>

                <Link href="#">
                    <a className="link-btn"></a>
                </Link>
            </div>

            <div className="woocommerce-widget best-seller-widget">
                <h3 className="woocommerce-widget-title">Best Seller</h3>

                <article className="item">
                    <Link href="#">
                        <a className="thumb">
                            <span className="fullimage cover bg1" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <h4 className="title usmall">
                            <Link href="#">
                                <a>Thermometer Gun</a>
                            </Link>
                        </h4>
                        <span>$99.00</span>
                        <div className="rating">
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                        </div>
                    </div>
                    <div className="clear"></div>
                </article>

                <article className="item">
                    <Link href="#">
                        <a className="thumb">
                            <span className="fullimage cover bg2" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <h4 className="title usmall">
                            <Link href="#">
                                <a>Protective Gloves</a>
                            </Link>
                        </h4>
                        <span>$65.00</span>
                        <div className="rating">
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star-half'></i>
                        </div>
                    </div>
                    <div className="clear"></div>
                </article>

                <article className="item">
                    <Link href="#">
                        <a className="thumb">
                            <span className="fullimage cover bg3" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <h4 className="title usmall">
                            <Link href="#"><a>Cosmetic Container</a></Link>
                        </h4>
                        
                        <span>$139.00</span>
                        <div className="rating">
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bx-star'></i>
                        </div>
                    </div>
                    <div className="clear"></div>
                </article>
            </div>
        </div>            
    )
}

export default ProductSidebar;