import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import FacilityStyleOne from '../components/Common/FacilityStyleOne';
import BlogSidebar from '../components/Blog/BlogSidebar';

const Blog3 = () => {
    return (
        <>
            <PageBanner
                pageTitle="Blog Grid (3 in Row)" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Blog" 
            />
 
            <section className="blog-area ptb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-lg-12 col-md-6">
                                    <div className="single-blog-post">
                                        <div className="post-image">
                                            <Link href="#">
                                                <a className="d-block">
                                                    <img src="/img/blog/blog-img1.jpg" alt="image" />
                                                </a>
                                            </Link>
                                        </div>

                                        <div className="post-content">
                                            <h3>
                                                <Link href="#">
                                                    <a>A researcher is conducting research on coronavirus in the lab</a>
                                                </Link>
                                            </h3>
                                            <ul className="post-meta align-items-center d-flex">
                                                <li>
                                                    <div className="flex align-items-center">
                                                        <img src="/img/user1.jpg" alt="image" />

                                                        <Link href="#">
                                                            <a>Nathan Oritz</a>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li>06-06-2020</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-6">
                                    <div className="single-blog-post">
                                        <div className="post-image">
                                            <Link href="#">
                                                <a className="d-block">
                                                    <img src="/img/blog/blog-img2.jpg" alt="image" />
                                                </a>
                                            </Link>
                                        </div>

                                        <div className="post-content">
                                            <h3>
                                                <Link href="#">
                                                    <a>You have to wash your hands for 20 seconds to keep yourself free</a>
                                                </Link>
                                            </h3>
                                            <ul className="post-meta align-items-center d-flex">
                                                <li>
                                                    <div className="flex align-items-center">
                                                        <img src="/img/user2.jpg" alt="image" />
                                                        <Link href="#">
                                                            <a>Randy Osborne</a>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li>05-06-2020</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-6">
                                    <div className="single-blog-post">
                                        <div className="post-image">
                                            <Link href="#">
                                                <a className="d-block">
                                                    <img src="/img/blog/blog-img3.jpg" alt="image" />
                                                </a>
                                            </Link>
                                        </div>

                                        <div className="post-content">
                                            <h3>
                                                <Link href="#">
                                                    <a>It is very important to wear proper clothing to keep yourself free</a>
                                                </Link>
                                            </h3>
                                            <ul className="post-meta align-items-center d-flex">
                                                <li>
                                                    <div className="flex align-items-center">
                                                        <img src="/img/user3.jpg" alt="image" />
                                                        <Link href="#">
                                                            <a>Patricia Marcus</a>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li>04-06-2020</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-6">
                                    <div className="single-blog-post">
                                        <div className="post-image">
                                            <Link href="#">
                                                <a className="d-block">
                                                    <img src="/img/blog/blog-img4.jpg" alt="image" />
                                                </a>
                                            </Link>
                                        </div>

                                        <div className="post-content">
                                            <h3>
                                                <Link href="#">
                                                    <a>Hollowed-out public health system faces more cuts amid virus</a>
                                                </Link>
                                            </h3>
                                            <ul className="post-meta align-items-center d-flex">
                                                <li>
                                                    <div className="flex align-items-center">
                                                        <img src="/img/user1.jpg" alt="image" />
                                                        <Link href="#">
                                                            <a>Nathan Oritz</a>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li>06-06-2020</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
 
                                <div className="col-lg-12 col-md-12">
                                    <div className="pagination-area text-center">
                                        <Link href="#">
                                            <a className="prev page-numbers">
                                                <i className='bx bx-chevrons-left'></i>
                                            </a>
                                        </Link>
                                        <span className="page-numbers current" aria-current="page">1</span>
                                        <Link href="#">
                                            <a className="page-numbers">2</a>
                                        </Link>
                                        <Link href="#">
                                            <a className="page-numbers">3</a>
                                        </Link>
                                        <Link href="#">
                                            <a className="page-numbers">4</a>
                                        </Link>
                                        <Link href="#">
                                            <a className="next page-numbers"><i className='bx bx-chevrons-right'></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </section>
            
    
            <FacilityStyleOne />
        </>
    )
}

export default Blog3;