import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import FacilityStyleOne from '../components/Common/FacilityStyleOne';

const History = () => {
    return (
        <>
            <PageBanner
                pageTitle="History" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="History" 
            />

            <section className="history-area ptb-70 bg-f9f9f9">
                <div className="container">
                    <ol className="timeline history-timeline">
                        <li className="timeline-block">
                            <div className="timeline-date">
                                <span>2010</span>
                                February 20
                                <sup>th</sup>
                            </div>

                            <div className="timeline-icon">
                                <span className="dot-badge"></span>
                            </div>

                            <div className="timeline-content">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 col-md-12">
                                        <div className="content">
                                            <h3>Founded</h3>
                                            <p>Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, tempor incididunt ut labore et dolore magna.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-5 col-md-12">
                                        <div className="image">
                                            <img src="/img/history/history-img1.jpg" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="timeline-block">
                            <div className="timeline-date">
                                <span>2013</span>
                                January 14
                                <sup>th</sup>
                            </div>

                            <div className="timeline-icon">
                                <span className="dot-badge"></span>
                            </div>

                            <div className="timeline-content">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 col-md-12">
                                        <div className="content">
                                            <h3>Global Success</h3>
                                            <p>Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, tempor incididunt ut labore et dolore magna.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-5 col-md-12">
                                        <div className="image">
                                            <img src="/img/history/history-img2.jpg" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="timeline-block">
                            <div className="timeline-date">
                                <span>2016</span>
                                March 25
                                <sup>th</sup>
                            </div>

                            <div className="timeline-icon">
                                <span className="dot-badge"></span>
                            </div>

                            <div className="timeline-content">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 col-md-12">
                                        <div className="content">
                                            <h3>Founded Medical Office</h3>
                                            <p>Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, tempor incididunt ut labore et dolore magna.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-5 col-md-12">
                                        <div className="image">
                                            <img src="/img/history/history-img3.jpg" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="timeline-block">
                            <div className="timeline-date">
                                <span>2020</span>
                                December 10
                                <sup>th</sup>
                            </div>

                            <div className="timeline-icon">
                                <span className="dot-badge"></span>
                            </div>

                            <div className="timeline-content">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 col-md-12">
                                        <div className="content">
                                            <h3>International Award</h3>
                                            <p>Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, tempor incididunt ut labore et dolore magna.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-5 col-md-12">
                                        <div className="image">
                                            <img src="/img/history/history-img4.jpg" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
            </section>

            <FacilityStyleOne />
        </>
    )
}

export default History;