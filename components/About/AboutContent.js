import React from 'react';

const AboutContent = () => {
    return (
        <section className="about-area ptb-70">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <span className="sub-title">We believe in less but better</span>
                            <h2>Welcome to MedQ! The purpose of your service is to create our MedQ. So  we always want to be by your side....</h2>
                            <p>Our company has been working honestly for 25 years. To make a positive impact in the markets where we operate, to empower partners and the community. we focusing on growth and adding value to customers.</p>
                            <div className="quotes-box">
                                <span>A message from our founders</span>
                                <p>We’ve been able to create a platform that customers can get their hands on whenever they want. It is always our intention to serve you. </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src="/img/about/about-img1.jpg" alt="image" />

                            <div className="shape">
                                <img src="/img/about/about-shape1.png" alt="image" />
                                <img src="/img/about/about-shape2.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutContent;