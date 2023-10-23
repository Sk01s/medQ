import React, { Component } from 'react';

class ProductDetailsTab extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tab-pane");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <div className="products-details-tabs">
                <ul className="nav nav-tabs">
                    <li 
                        onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab1')}}
                        className="current"
                    >
                        Description
                    </li>
                    <li 
                        onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab2')}}
                    >
                        Shipping
                    </li>
                    <li 
                        onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab3')}}
                    >
                        Reviews (2)
                    </li>
                </ul>

                <div className="tab-content">
                    <div id="tab1" className="tab-pane">
                        {this.props.description}
                    </div>

                    <div id="tab2" className="tab-pane">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td>Shipping</td>
                                        <td>This item Ship to USA</td>
                                    </tr>

                                    <tr>
                                        <td>Delivery</td>
                                        <td>
                                            Estimated between Wednesday 07/31/2020 and Monday 08/05/2020 <br />
                                            Will usually ship within 1 bussiness day.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div id="tab3" className="tab-pane">
                        <div className="products-reviews">
                            <h3>Products Rating</h3>

                            <div className="rating">
                                <span className="bx bxs-star checked"></span>
                                <span className="bx bxs-star checked"></span>
                                <span className="bx bxs-star checked"></span>
                                <span className="bx bxs-star checked"></span>
                                <span className="bx bxs-star"></span>
                            </div>

                            <div className="rating-count">
                                <span>4.1 average based on 4 reviews.</span>
                            </div>

                            <div className="row">
                                <div className="side">
                                    <div>5 star</div>
                                </div>

                                <div className="middle">
                                    <div className="bar-container">
                                        <div className="bar-5"></div>
                                    </div>
                                </div>

                                <div className="side right">
                                    <div>02</div>
                                </div>

                                <div className="side">
                                    <div>4 star</div>
                                </div>

                                <div className="middle">
                                    <div className="bar-container">
                                        <div className="bar-4"></div>
                                    </div>
                                </div>

                                <div className="side right">
                                    <div>03</div>
                                </div>

                                <div className="side">
                                    <div>3 star</div>
                                </div>

                                <div className="middle">
                                    <div className="bar-container">
                                        <div className="bar-3"></div>
                                    </div>
                                </div>

                                <div className="side right">
                                    <div>04</div>
                                </div>

                                <div className="side">
                                    <div>2 star</div>
                                </div>

                                <div className="middle">
                                    <div className="bar-container">
                                        <div className="bar-2"></div>
                                    </div>
                                </div>

                                <div className="side right">
                                    <div>05</div>
                                </div>

                                <div className="side">
                                    <div>1 star</div>
                                </div>

                                <div className="middle">
                                    <div className="bar-container">
                                        <div className="bar-1"></div>
                                    </div>
                                </div>

                                <div className="side right">
                                    <div>00</div>
                                </div>
                            </div>
                        </div>

                        <div className="products-review-comments">
                            <h3>3 Reviews</h3>

                            <div className="user-review">
                                <img src="/img/user1.jpg" alt="image" />
                                
                                <div className="review-rating">
                                    <div className="review-stars">
                                        <i className='bx bxs-star checked'></i>
                                        <i className='bx bxs-star checked'></i>
                                        <i className='bx bxs-star checked'></i>
                                        <i className='bx bxs-star checked'></i>
                                        <i className='bx bxs-star checked'></i>
                                    </div>

                                    <span className="d-inline-block">James Anderson</span>
                                </div>

                                <span className="d-block sub-comment">Excellent</span>
                                <p>Very well built theme, couldn't be happier with it. Can't wait for future updates to see what else they add in.</p>
                            </div>

                            <div className="user-review">
                                <img src="/img/user2.jpg" alt="image" />

                                <div className="review-rating">
                                    <div className="review-stars">
                                        <i className='bx bxs-star checked'></i>
                                        <i className='bx bxs-star checked'></i>
                                        <i className='bx bxs-star checked'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                    </div>

                                    <span className="d-inline-block">Sarah Taylor</span>
                                </div>
                                <span className="d-block sub-comment">Video Quality!</span>
                                <p>Was really easy to implement and they quickly answer my additional questions!</p>
                            </div>

                            <div className="user-review">
                                <img src="/img/user3.jpg" alt="image" />

                                <div className="review-rating">
                                    <div className="review-stars">
                                        <i className='bx bxs-star checked'></i>
                                        <i className='bx bxs-star checked'></i>
                                        <i className='bx bxs-star checked'></i>
                                        <i className='bx bxs-star checked'></i>
                                        <i className='bx bxs-star checked'></i>
                                    </div>
                                    <span className="d-inline-block">David Warner</span>
                                </div>
                                <span className="d-block sub-comment">Perfect Coding!</span>
                                <p>Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support.</p>
                            </div>

                            <div className="user-review">
                                <img src="/img/user4.jpg" alt="image" />

                                <div className="review-rating">
                                    <div className="review-stars">
                                        <i className='bx bxs-star checked'></i>
                                        <i className='bx bxs-star checked'></i>
                                        <i className='bx bxs-star checked'></i>
                                        <i className='bx bxs-star checked'></i>
                                        <i className='bx bxs-star'></i>
                                    </div>
                                    <span className="d-inline-block">King Kong</span>
                                </div>
                                <span className="d-block sub-comment">Perfect Video!</span>
                                <p>Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support.</p>
                            </div>
                        </div>

                        <div className="review-form-wrapper">
                            <h3>Add a review</h3>
                            <p className="comment-notes">Your email address will not be published. Required fields are marked <span>*</span></p>

                            <form>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="rating">
                                            <input type="radio" id="star5" name="rating" value="5" /><label htmlFor="star5"></label>
                                            <input type="radio" id="star4" name="rating" value="4" /><label htmlFor="star4"></label>
                                            <input type="radio" id="star3" name="rating" value="3" /><label htmlFor="star3"></label>
                                            <input type="radio" id="star2" name="rating" value="2" /><label htmlFor="star2"></label>
                                            <input type="radio" id="star1" name="rating" value="1" /><label htmlFor="star1"></label>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Name *" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email *" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea placeholder="Your review" className="form-control" cols="30" rows="6"></textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <p className="comment-form-cookies-consent">
                                            <input type="checkbox" id="test1" /> 
                                            <label htmlFor="test1">Save my name, email, and website in this browser for the next time I comment.</label>
                                        </p>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="default-btn">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetailsTab;