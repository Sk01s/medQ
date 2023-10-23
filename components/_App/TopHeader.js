import React from "react";
import Link from "next/link";
import { handleLogout } from "../../utils/auth";

const TopHeader = ({ user }) => {
    return (
        <div className="top-header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-7">
                        <ul className="top-header-contact-info">
                            <li>
                                <i className="bx bx-phone-call"></i>
                                <a href="tel:+1234567898">(+123) 456-7898</a>
                            </li>
                            <li>
                                <i className="bx bx-map"></i>
                                <a href="#" target="_blank">
                                    6890 Blvd, The Bronx, NY 1058, USA
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-6 col-md-5">
                        <ul className="top-header-menu">
                            <li>
                                <div className="dropdown currency-switcher d-inline-block">
                                    <button
                                        className="dropdown-toggle"
                                        type="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <span>
                                            USD{" "}
                                            <i className="bx bx-chevron-down"></i>
                                        </span>
                                    </button>

                                    <div className="dropdown-menu">
                                        <Link href="#">
                                            <a className="dropdown-item">USD</a>
                                        </Link>
                                        <Link href="#">
                                            <a className="dropdown-item">INR</a>
                                        </Link>
                                        <Link href="#">
                                            <a className="dropdown-item">GBP</a>
                                        </Link>
                                    </div>
                                </div>
                            </li>

                            <li>
                                {user ? (
                                    <Link href="#">
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleLogout();
                                            }}
                                        >
                                            Logout
                                        </a>
                                    </Link>
                                ) : (
                                    <Link href="/auth">
                                        <a>My Account</a>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
