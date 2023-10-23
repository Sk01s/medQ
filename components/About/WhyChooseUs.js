import React from 'react';

const WhyChooseUs = () => {
    return (
        <section className="why-choose-us-area pb-40">
            <div className="container">
                <div className="section-title">
                    <h2>Why Choose Us</h2>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-why-choose-box">
                            <div className="icon">
                                <i className="flaticon-factory"></i>
                            </div>
                            <h3>High Production</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur ipiscing elit, sed do eiusmod tempor inc ididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-why-choose-box">
                            <div className="icon">
                                <i className="flaticon-supply-chain-management"></i>
                            </div>
                            <h3>Reliable Supplying</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur ipiscing elit, sed do eiusmod tempor inc ididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6 offset-lg-0 offset-sm-3 offset-md-3">
                        <div className="single-why-choose-box">
                            <div className="icon">
                                <i className="flaticon-fast-delivery"></i>
                            </div>
                            <h3>Quick Delivery</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur ipiscing elit, sed do eiusmod tempor inc ididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs;