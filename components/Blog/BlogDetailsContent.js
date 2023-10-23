import React from 'react';
import Link from 'next/link';
import CommentForm from './CommentForm';
import BlogSidebar from './BlogSidebar';

const BlogDetailsContent = () => {
    return (
        <section className="blog-details-area ptb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="blog-details-desc">
                            <div className="article-image">
                                <img src="/img/blog/blog-img1.jpg" alt="image" />
                            </div>

                            <div className="article-content">
                                <div className="entry-meta">
                                    <ul>
                                        <li>
                                            <i className='bx bx-folder-open'></i>
                                            <span>Category</span>
                                            <Link href="#">
                                                <a>Fashion</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className='bx bx-group'></i>
                                            <span>View</span>
                                            813,454
                                        </li>
                                        <li>
                                            <i className='bx bx-calendar'></i>
                                            <span>Last Updated</span>
                                            Jun 21, 2020
                                        </li>
                                    </ul>
                                </div>

                                <h3>A researcher is conducting research on coronavirus in the lab</h3>

                                <p>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing.</p>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                                <blockquote>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    <cite>Tom Cruise</cite>
                                </blockquote>

                                <p>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing.</p>

                                <ul className="wp-block-gallery columns-3">
                                    <li className="blocks-gallery-item">
                                        <figure>
                                            <img src="/img/blog/blog-img4.jpg" alt="image" />
                                        </figure>
                                    </li>

                                    <li className="blocks-gallery-item">
                                        <figure>
                                            <img src="/img/blog/blog-img5.jpg" alt="image" />
                                        </figure>
                                    </li>

                                    <li className="blocks-gallery-item">
                                        <figure>
                                            <img src="/img/blog/blog-img6.jpg" alt="image" />
                                        </figure>
                                    </li>
                                </ul>

                                <h3>Four major elements that we offer:</h3>

                                <ul className="features-list">
                                    <li><i className='bx bx-badge-check'></i> Scientific skills for getting a better result</li>
                                    <li><i className='bx bx-badge-check'></i> Communication skills to getting in touch</li>
                                    <li><i className='bx bx-badge-check'></i> A career overview opportunity available</li>
                                    <li><i className='bx bx-badge-check'></i> A good work environment for work</li>
                                </ul>

                                <h3>Setting the mood with incense</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                                <h3>The rise of marketing and why you need it</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                            </div>

                            <div className="article-footer">
                                <div className="article-tags">
                                    <span><i className='bx bx-purchase-tag'></i></span>
                                    <Link href="#"><a>Fashion</a></Link>
                                    <Link href="#"><a>Games</a></Link>
                                    <Link href="#"><a>Travel</a></Link>
                                </div>

                                <div className="article-share">
                                    <ul className="social">
                                        <li><span>Share:</span></li>
                                        <li><a href="#" className="facebook" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="twitter" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="linkedin" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                        <li><a href="#" className="instagram" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="article-author">
                                <div className="author-profile-header"></div>
                                <div className="author-profile">
                                    <div className="author-profile-title">
                                        <img src="/img/user1.jpg" className="shadow-sm" alt="image" />
                                        <h4>Chris Orwig</h4>
                                        <span className="d-block">Photographer, Author, Writer</span>
                                        <p>Chris Orwig is a celebrated photographer, author, and writer who brings passion to everything he does. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="medq-post-navigation">
                                <div className="prev-link-wrapper">
                                    <div className="info-prev-link-wrapper">
                                        <Link href="#">
                                            <a>
                                                <span className="image-prev">
                                                    <img src="/img/blog/blog-img2.jpg" alt="image" />
                                                    <span className="post-nav-title">Prev</span>
                                                </span>
            
                                                <span className="prev-link-info-wrapper">
                                                    <span className="prev-title">Digital Marketing Strategies for Lead Generation</span>
                                                    <span className="meta-wrapper">
                                                        <span className="date-post">Jun 20, 2020</span>
                                                    </span>
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
        
                                <div className="next-link-wrapper">
                                    <div className="info-next-link-wrapper">
                                        <Link href="#">
                                            <a>
                                                <span className="next-link-info-wrapper">
                                                    <span className="next-title">Agencies Can Successfully Recover From COVID?</span>
                                                    <span className="meta-wrapper">
                                                        <span className="date-post">Jun 19, 2020</span>
                                                    </span>
                                                </span>
            
                                                <span className="image-next">
                                                    <img src="/img/blog/blog-img3.jpg" alt="image" />
                                                    <span className="post-nav-title">Next</span>
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="comments-area">
                                <h3 className="comments-title">2 Comments:</h3>

                                <ol className="comment-list">
                                    <li className="comment">
                                        <article className="comment-body">
                                            <footer className="comment-meta">
                                                <div className="comment-author vcard">
                                                    <img src="/img/user1.jpg" className="avatar" alt="image" />
                                                    <b className="fn">John Jones</b>
                                                    <span className="says">says:</span>
                                                </div>

                                                <div className="comment-metadata">
                                                    <span>April 24, 2019 at 10:59 am</span>
                                                </div>
                                            </footer>

                                            <div className="comment-content">
                                                <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                            </div>

                                            <div className="reply">
                                                <Link href="#">
                                                    <a className="comment-reply-link">Reply</a>
                                                </Link>
                                            </div>
                                        </article>

                                        <ol className="children">
                                            <li className="comment">
                                                <article className="comment-body">
                                                    <footer className="comment-meta">
                                                        <div className="comment-author vcard">
                                                            <img src="/img/user2.jpg" className="avatar" alt="image" />
                                                            <b className="fn">Steven Smith</b>
                                                            <span className="says">says:</span>
                                                        </div>
            
                                                        <div className="comment-metadata">
                                                            <span>April 24, 2019 at 10:59 am</span>
                                                        </div>
                                                    </footer>
            
                                                    <div className="comment-content">
                                                        <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                    </div>
            
                                                    <div className="reply">
                                                        <Link href="#">
                                                            <a className="comment-reply-link">Reply</a>
                                                        </Link>
                                                    </div>
                                                </article>

                                                <ol className="children">
                                                    <li className="comment">
                                                        <article className="comment-body">
                                                            <footer className="comment-meta">
                                                                <div className="comment-author vcard">
                                                                    <img src="/img/user3.jpg" className="avatar" alt="image" />
                                                                    <b className="fn">Sarah Taylor</b>
                                                                    <span className="says">says:</span>
                                                                </div>
                    
                                                                <div className="comment-metadata">
                                                                    <span>April 24, 2019 at 10:59 am</span>
                                                                </div>
                                                            </footer>
                    
                                                            <div className="comment-content">
                                                                <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                            </div>
                    
                                                            <div className="reply">
                                                                <Link href="#">
                                                                    <a className="comment-reply-link">Reply</a>
                                                                </Link>
                                                            </div>
                                                        </article>
                                                    </li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </li>

                                    <li className="comment">
                                        <article className="comment-body">
                                            <footer className="comment-meta">
                                                <div className="comment-author vcard">
                                                    <img src="/img/user4.jpg" className="avatar" alt="image" />
                                                    <b className="fn">John Doe</b>
                                                    <span className="says">says:</span>
                                                </div>

                                                <div className="comment-metadata">
                                                    <span>April 24, 2019 at 10:59 am</span>
                                                </div>
                                            </footer>

                                            <div className="comment-content">
                                                <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                            </div>

                                            <div className="reply">
                                                <Link href="#">
                                                    <a className="comment-reply-link">Reply</a>
                                                </Link>
                                            </div>
                                        </article>

                                        <ol className="children">
                                            <li className="comment">
                                                <article className="comment-body">
                                                    <footer className="comment-meta">
                                                        <div className="comment-author vcard">
                                                            <img src="/img/user1.jpg" className="avatar" alt="image" />
                                                            <b className="fn">James Anderson</b>
                                                            <span className="says">says:</span>
                                                        </div>
            
                                                        <div className="comment-metadata">
                                                            <span>April 24, 2019 at 10:59 am</span>
                                                        </div>
                                                    </footer>
            
                                                    <div className="comment-content">
                                                        <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                    </div>
            
                                                    <div className="reply">
                                                        <Link href="#">
                                                            <a className="comment-reply-link">Reply</a>
                                                        </Link>
                                                    </div>
                                                </article>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                                
                                {/* Comment Form */}
                                <CommentForm />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        {/* Blog Sidebar */}
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogDetailsContent;