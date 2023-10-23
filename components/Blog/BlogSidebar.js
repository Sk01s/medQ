import React from 'react';
import Link from 'next/link';

const BlogSidebar = () => {
    return (
        <div className="widget-area">
            <div className="widget widget_search">
                <h3 className="widget-title">Search</h3>

                <form className="search-form">
                    <label>
                        <span className="screen-reader-text">Search for:</span>
                        <input type="search" className="search-field" placeholder="Search..." />
                    </label>
                    <button type="submit"><i className="bx bx-search-alt"></i></button>
                </form>
            </div>

            <div className="widget widget_medq_posts_thumb">
                <h3 className="widget-title">Popular Posts</h3>

                <div className="item">
                    <Link href="#">
                        <a className="thumb">
                            <span className="fullimage cover bg1" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <span>June 10, 2020</span>
                        <h4 className="title usmall">
                            <Link href="#">
                                <a>The Data Surrounding Higher Education</a>
                            </Link>
                        </h4>
                    </div>

                    <div className="clear"></div>
                </div>

                <div className="item">
                    <Link href="#">
                        <a className="thumb">
                            <span className="fullimage cover bg2" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <span>June 21, 2020</span>
                        <h4 className="title usmall">
                            <Link href="#">
                                <a>Conversion Rate the Sales Funnel Optimization</a>
                            </Link>
                        </h4>
                    </div>

                    <div className="clear"></div>
                </div>

                <div className="item">
                    <Link href="#">
                        <a className="thumb">
                            <span className="fullimage cover bg3" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <span>June 30, 2020</span>
                        <h4 className="title usmall">
                            <Link href="#">
                                <a>Business Data is changing the world’s Energy</a>
                            </Link>
                        </h4>
                    </div>

                    <div className="clear"></div>
                </div>
            </div>

            <div className="widget widget_categories">
                <h3 className="widget-title">Categories</h3>

                <ul>
                    <li>
                        <Link href="#">
                            <a>Design <span className="post-count">(03)</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Lifestyle <span className="post-count">(05)</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Script <span className="post-count">(10)</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Device <span className="post-count">(08)</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Tips <span className="post-count">(01)</span></a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="widget widget_tag_cloud">
                <h3 className="widget-title">Popular Tags</h3>

                <div className="tagcloud">
                    <Link href="#">
                        <a>Business <span className="tag-link-count"> (3)</span></a>
                    </Link>
                    <Link href="#">
                        <a>Design <span className="tag-link-count"> (3)</span></a>
                    </Link>
                    <Link href="#">
                        <a>Aike <span className="tag-link-count"> (2)</span></a>
                    </Link>
                    <Link href="#">
                        <a>Fashion <span className="tag-link-count"> (2)</span></a>
                    </Link>
                    <Link href="#">
                        <a>Travel <span className="tag-link-count"> (1)</span></a>
                    </Link>
                    <Link href="#">
                        <a>Smart <span className="tag-link-count"> (1)</span></a>
                    </Link>
                    <Link href="#">
                        <a>Marketing <span className="tag-link-count"> (1)</span></a>
                    </Link>
                    <Link href="#">
                        <a>Tips <span className="tag-link-count"> (2)</span></a>
                    </Link>
                </div>
            </div>

            <div className="widget widget_instagram">
                <ul>
                    <li>
                        <div className="box">
                            <img src="/img/gallery/gallery-img1.jpg" alt="image" />
                            <i className="bx bxl-instagram"></i>

                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                    </li>

                    <li>
                        <div className="box">
                            <img src="/img/gallery/gallery-img2.jpg" alt="image" />
                            <i className="bx bxl-instagram"></i>
                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                    </li>

                    <li>
                        <div className="box">
                            <img src="/img/gallery/gallery-img3.jpg" alt="image" />
                            <i className="bx bxl-instagram"></i>
                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                    </li>

                    <li>
                        <div className="box">
                            <img src="/img/gallery/gallery-img4.jpg" alt="image" />
                            <i className="bx bxl-instagram"></i>
                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                    </li>

                    <li>
                        <div className="box">
                            <img src="/img/gallery/gallery-img5.jpg" alt="image" />
                            <i className="bx bxl-instagram"></i>
                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                    </li>

                    <li>
                        <div className="box">
                            <img src="/img/gallery/gallery-img6.jpg" alt="image" />
                            <i className="bx bxl-instagram"></i>
                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                    </li>

                    <li>
                        <div className="box">
                            <img src="/img/gallery/gallery-img7.jpg" alt="image" />
                            <i className="bx bxl-instagram"></i>
                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                    </li>

                    <li>
                        <div className="box">
                            <img src="/img/gallery/gallery-img8.jpg" alt="image" />
                            <i className="bx bxl-instagram"></i>
                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                    </li>

                    <li>
                        <div className="box">
                            <img src="/img/gallery/gallery-img9.jpg" alt="image" />
                            <i className="bx bxl-instagram"></i>
                            <Link href="#">
                                <a target="_blank" className="link-btn"></a>
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BlogSidebar;