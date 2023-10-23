import React from 'react';
import Link from 'next/link';

const CategoriesMegamenu = () => {
    return (
        <div className="megamenu-container">
            <div className="megamenu-title">
                Categories
            </div>

            <div className="megamenu-category">
                <ul className="nav">
                    <li className="nav-item">
                        <Link href="#">
                            <a className="nav-link">Accessories <i className="flaticon-next"></i></a>
                        </Link>

                        <ul className="dropdown-menu megamenu">
                            <li className="row align-items-center">
                                <div className="col-lg-4 col-sm-6">
                                    <h3>Accessories I</h3>

                                    <ul className="megamenu-nav">
                                        <li><Link href="#"><a>EKG/ECG Machines</a></Link></li>
                                        <li><Link href="#"><a>Surgical Tables</a></Link></li>
                                        <li><Link href="#"><a>Blanket Warmers</a></Link></li>
                                        <li><Link href="#"><a>Electrosurgical Units</a></Link></li>
                                        <li><Link href="#"><a>Surgical Lights</a></Link></li>
                                    </ul>
                                </div>

                                <div className="col-lg-4 col-sm-6">
                                    <h3>Accessories II</h3>

                                    <ul className="megamenu-nav">
                                        <li><Link href="#"><a>Stretchers</a></Link></li>
                                        <li><Link href="#"><a>Defibrillators</a></Link></li>
                                        <li><Link href="#"><a>Anesthesia Machines</a></Link></li>
                                        <li><Link href="#"><a>Patient Monitors</a></Link></li>
                                        <li><Link href="#"><a>Sterilizers</a></Link></li>
                                    </ul>
                                </div>

                                <div className="col-lg-4 col-sm-6">
                                    <div className="custom-media">
                                        <Link href="#">
                                            <a className="d-block"><img src="/img/menu-img1.jpg" alt="image" /></a>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <Link href="#">
                            <a className="nav-link">Pharmacy <i className="flaticon-next"></i></a>
                        </Link>

                        <ul className="dropdown-menu megamenu">
                            <li className="row align-items-center">
                                <div className="col-lg-4 col-sm-6">
                                    <h3>Pharmacy 01</h3>

                                    <ul className="megamenu-nav">
                                        <li><Link href="#"><a>Acetaminophen</a></Link></li>
                                        <li><Link href="#"><a>Adderall</a></Link></li>
                                        <li><Link href="#"><a>Amitriptyline</a></Link></li>
                                        <li><Link href="#"><a>Amlodipine</a></Link></li>
                                        <li><Link href="#"><a>Amoxicillin</a></Link></li>
                                    </ul>
                                </div>

                                <div className="col-lg-4 col-sm-6">
                                    <h3>Pharmacy 02</h3>

                                    <ul className="megamenu-nav">
                                        <li><Link href="#"><a>Cephalexin</a></Link></li>
                                        <li><Link href="#"><a>Ciprofloxacin</a></Link></li>
                                        <li><Link href="#"><a>Citalopram</a></Link></li>
                                        <li><Link href="#"><a>Clindamycin</a></Link></li>
                                        <li><Link href="#"><a>Clonazepam</a></Link></li>
                                    </ul>
                                </div>

                                <div className="col-lg-4 col-sm-6">
                                    <h3>Pharmacy 03</h3>

                                    <ul className="megamenu-nav">
                                        <li><Link href="#"><a>Ativan</a></Link></li>
                                        <li><Link href="#"><a>Atorvastatin</a></Link></li>
                                        <li><Link href="#"><a>Azithromycin</a></Link></li>
                                        <li><Link href="#"><a>Benzonatate</a></Link></li>
                                        <li><Link href="#"><a>Brilinta</a></Link></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <Link href="#">
                            <a className="nav-link">Health & Nutrition <i className="flaticon-next"></i></a>
                        </Link>

                        <ul className="dropdown-menu megamenu">
                            <li className="row align-items-center">
                                <div className="col-lg-4 col-sm-6">
                                    <h3>Health Drinks</h3>

                                    <ul className="megamenu-nav">
                                        <li><Link href="#"><a>Children</a></Link></li>
                                        <li><Link href="#"><a>Diabetic Drinks</a></Link></li>
                                        <li><Link href="#"><a>Glucose Powder</a></Link></li>
                                        <li><Link href="#"><a>Men & Women</a></Link></li>
                                    </ul>
                                </div>

                                <div className="col-lg-4 col-sm-6">
                                    <h3>Breakfast Cereals</h3>

                                    <ul className="megamenu-nav">
                                        <li><Link href="#"><a>Cereal Basics</a></Link></li>
                                        <li><Link href="#"><a>Sugar & Carbs</a></Link></li>
                                        <li><Link href="#"><a>Misleading Claims</a></Link></li>
                                        <li><Link href="#"><a>Better Breakfasts</a></Link></li>
                                    </ul>
                                </div>

                                <div className="col-lg-4 col-sm-6">
                                    <h3>Management</h3>

                                    <ul className="megamenu-nav">
                                        <li><Link href="#"><a>Ativan</a></Link></li>
                                        <li><Link href="#"><a>Azithromycin</a></Link></li>
                                        <li><Link href="#"><a>Benzonatate</a></Link></li>
                                        <li><Link href="#"><a>Brilinta</a></Link></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <Link href="#">
                            <a className="nav-link">Personal Equipment <i className="flaticon-next"></i></a>
                        </Link>

                        <ul className="dropdown-menu">
                            <li className="nav-item">
                                <Link href="#">
                                    <a className="nav-link">Cosmetic</a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="#">
                                    <a  className="nav-link">Microscope</a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="#">
                                    <a className="nav-link">Hearing Aid</a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="#">
                                    <a className="nav-link">Metal Stethoscope</a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="#">
                                    <a className="nav-link">Medical Glass</a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="#">
                                    <a className="nav-link">Isometric</a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="#">
                                    <a className="nav-link">Mask</a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="#">
                                    <a className="nav-link">Blood Pressure</a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="#">
                                    <a className="nav-link">Face Mask</a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="#">
                                    <a className="nav-link">Gloves</a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href="#">
                                    <a className="nav-link">Sanitizer</a>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <Link href="#">
                            <a className="nav-link">Diagnostic Sets</a>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link href="#">
                            <a className="nav-link">Microscope</a>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link href="#">
                            <a className="nav-link">Needle & Syringes</a>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link href="#">
                            <a className="nav-link">OT Therapy</a>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link href="#">
                            <a className="nav-link">First Aid</a>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link href="#">
                            <a className="nav-link">Transport</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CategoriesMegamenu;