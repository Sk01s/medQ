import React from "react";
import Link from "next/link";
import CookieConsent from "react-cookie-consent";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget">
                                <Link href="/">
                                    <a className="logo d-inline-block">
                                        <img src="/img/logo.png" alt="image" />
                                    </a>
                                </Link>

                                <ul className="footer-contact-info">
                                    <li>
                                        <span>Hotline:</span>{" "}
                                        <a href="#">16768</a>
                                    </li>
                                    <li>
                                        <span>Phone:</span>{" "}
                                        <a href="tel:+1234567898">
                                            (+123) 456-7898
                                        </a>
                                    </li>
                                    <li>
                                        <span>Email:</span>{" "}
                                        <a href="mailto:hello@medQ.com">
                                            hello@medQ.com
                                        </a>
                                    </li>
                                    <li>
                                        <span>Address:</span>{" "}
                                        <a href="#" target="_blank">
                                            6890 Blvd, The Bronx, NY 1058, USA
                                        </a>
                                    </li>
                                </ul>
                                <ul className="social">
                                    <li>
                                        <a
                                            href="https://www.facebook.com/"
                                            target="_blank"
                                        >
                                            <i className="bx bxl-facebook-square"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.twitter.com/"
                                            target="_blank"
                                        >
                                            <i className="bx bxl-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.instagram.com/"
                                            target="_blank"
                                        >
                                            <i className="bx bxl-instagram-alt"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.linkedin.com/"
                                            target="_blank"
                                        >
                                            <i className="bx bxl-linkedin-square"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.pinterest.com/"
                                            target="_blank"
                                        >
                                            <i className="bx bxl-pinterest"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Information</h3>

                                <ul className="link-list">
                                    <li>
                                        <Link href="/about">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-of-service">
                                            <a>Terms & Conditions</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/customer-service">
                                            <a>Delivery Information</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/customer-service">
                                            <a>Orders and Returns</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Customer Care</h3>

                                <ul className="link-list">
                                    <li>
                                        <Link href="/faq">
                                            <a>Help & FAQs</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/profile-authentication">
                                            <a>My Account</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/cart">
                                            <a>Order History</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/cart">
                                            <a>Wishlist</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Newsletter</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/purchase-guide">
                                            <a>Purchasing Policy</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Newsletter</h3>
                                <p>
                                    Sign up for our mailing list to get the
                                    latest updates & offers.
                                </p>
                                <form className="newsletter-form">
                                    <input
                                        type="text"
                                        className="input-newsletter"
                                        placeholder="Enter your email address"
                                        name="email"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="default-btn"
                                    >
                                        Subscribe Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p>
                                    Copyright{" "}
                                    <i className="bx bx-copyright"></i> {currentYear} MedQ. Designed By{" "}
                                    <a
                                        href="https://envytheme.com/"
                                        target="_blank"
                                    >
                                        EnvyTheme
                                    </a>
                                </p>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="payment-types">
                                    <ul className="d-flex align-items-center justify-content-end">
                                        <li>We accept payment via:</li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <img
                                                    src="/img/payment-types/visa.png"
                                                    alt="image"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <img
                                                    src="/img/payment-types/mastercard.png"
                                                    alt="image"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <img
                                                    src="/img/payment-types/paypal.png"
                                                    alt="image"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <img
                                                    src="/img/payment-types/descpver.png"
                                                    alt="image"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <img
                                                    src="/img/payment-types/american-express.png"
                                                    alt="image"
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Cookies Consent */}
            <CookieConsent
                location="bottom"
                buttonText="Sure!!"
                cookieName="medqReactNextStore"
                style={{ background: "#2B373B" }}
                buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                expires={999}
            >
                This website uses cookies to enhance the user experience.{" "}
            </CookieConsent>
        </>
    );
};

export default Footer;
