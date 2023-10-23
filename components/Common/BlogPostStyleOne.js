import React from 'react';
import Link from 'next/link';

const BlogPostStyleOne = () => {
    return (
        <div className="blog-area pb-40">
            <div className="container">
                <div className="section-title">
                    <h2>Our Blog</h2>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <Link href="/single-blog">
                                    <a className="d-block"><img src="/img/blog/blog-img1.jpg" alt="image" /></a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <h3>
                                    <Link href="/single-blog">
                                        <a>A researcher is conducting research on coronavirus in the lab</a>
                                    </Link>
                                </h3>
                                <ul className="post-meta align-items-center d-flex">
                                    <li>
                                        <div className="flex align-items-center">
                                            <img src="/img/user1.jpg" alt="image" />
                                            <Link href="#"><a href="#">Nathan Oritz</a></Link>
                                        </div>
                                    </li>
                                    <li>06-06-2020</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <Link href="/single-blog">
                                    <a className="d-block"><img src="/img/blog/blog-img2.jpg" alt="image" /></a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <h3>
                                    <Link href="/single-blog">
                                        <a>You have to wash your hands for 20 seconds to keep yourself free</a>
                                    </Link>
                                </h3>
                                <ul className="post-meta align-items-center d-flex">
                                    <li>
                                        <div className="flex align-items-center">
                                            <img src="/img/user2.jpg" alt="image" />
                                            <Link href="#"><a>Randy Osborne</a></Link>
                                        </div>
                                    </li>
                                    <li>05-06-2020</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <Link href="/single-blog">
                                    <a className="d-block"><img src="/img/blog/blog-img3.jpg" alt="image" /></a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <h3>
                                    <Link href="/single-blog">
                                        <a>It is very important to wear proper clothing to keep yourself free</a>
                                    </Link>
                                </h3>
                                <ul className="post-meta align-items-center d-flex">
                                    <li>
                                        <div className="flex align-items-center">
                                            <img src="/img/user3.jpg" alt="image" />
                                            <Link href="#"><a>Patricia Marcus</a></Link>
                                        </div>
                                    </li>
                                    <li>04-06-2020</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPostStyleOne;