import React from 'react';
import Link from 'next/link';

const ContactInfo = () => {
    return (
        <div className="contact-info-area pt-70 pb-40">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-contact-info-box">
                            <div className="icon">
                                <i className="flaticon-placeholder"></i>
                            </div>
                            <h3>Address</h3>
                            <p><a href="#" target="_blank">6890 Blvd, The Bronx, NY 1058, USA</a></p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-contact-info-box">
                            <div className="icon">
                                <i className="flaticon-phone-ringing"></i>
                            </div>
                            <h3>Phone</h3>
                            <p><a href="tel:16798">Hotline: 16798</a></p>
                            <p><a href="tel:+1234567898">Tech support: (+123) 456-7898</a></p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-contact-info-box">
                            <div className="icon">
                                <i className="flaticon-email"></i>
                            </div>
                            <h3>Email</h3>
                            <p><a href="mailto:hello@medq.com">hello@medq.com</a></p>
                            <p><a href="#">Skype: hello.MedQ</a></p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-contact-info-box">
                            <div className="icon">
                                <i className="flaticon-clock"></i>
                            </div>
                            <h3>Working Hours</h3>
                            <p>Sunday - Friday</p>
                            <p>8:00AM - 8:00PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;