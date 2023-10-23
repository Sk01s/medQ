import React from "react";
import { useRecoilState } from "recoil";
import { collapsedState, addProductState } from "../../utils/recoil-atoms";
import Link from "../../utils/ActiveLink";
import AddProductsModal from "./AddProductsModal";
import { handleLogout } from "../../utils/auth";

const AdminNavbar = () => {
    const [collapsed, setCollapsed] = useRecoilState(collapsedState);

    // addProduct Modal
    const [addProduct, setAddProduct] = useRecoilState(addProductState);

    const toggleAddProduct = () => {
        setAddProduct(!addProduct);
        // console.log(modal)
    };

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    };

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    });

    const classOne = collapsed
        ? "collapse navbar-collapse"
        : "collapse navbar-collapse show";
    const classTwo = collapsed
        ? "navbar-toggler navbar-toggler-right collapsed"
        : "navbar-toggler navbar-toggler-right";

    return (
        <>
            <div id="navbar" className="navbar-area admin-navbar-area">
                <div className="admin-main-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a
                                    onClick={() => setCollapsed(true)}
                                    className="navbar-brand"
                                >
                                    <img src="/img/logo.png" alt="logo" />
                                </a>
                            </Link>

                            <button
                                onClick={toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div
                                className={classOne}
                                id="navbarSupportedContent"
                            >
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <Link
                                            href="/admin/dashboard"
                                            activeClassName="active"
                                        >
                                            <a
                                                onClick={() =>
                                                    setCollapsed(true)
                                                }
                                                className="nav-link"
                                            >
                                                Dashboard
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="/admin/dashboard"
                                            activeClassName="active"
                                        >
                                            <a
                                                onClick={() =>
                                                    setCollapsed(true)
                                                }
                                                className="nav-link"
                                            >
                                                Products
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="/admin/dashboard"
                                            activeClassName="active"
                                        >
                                            <a
                                                onClick={() =>
                                                    setCollapsed(true)
                                                }
                                                className="nav-link"
                                            >
                                                Orders
                                            </a>
                                        </Link>
                                    </li>
                                </ul>

                                <div className="others-option d-flex align-items-center">
                                    <div className="option-item">
                                        <Link
                                            href="#searchForm"
                                            activeClassName="active"
                                        >
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    toggleAddProduct();
                                                }}
                                                className="admin-btn"
                                            >
                                                Add Products <span></span>
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="option-item">
                                        <div className="profile">
                                            <Link href="#">
                                                <a className="nav-link">
                                                    <img
                                                        src="/img/profile.jpg"
                                                        alt="Image"
                                                    />
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link
                                                        href="#"
                                                        activeClassName="active"
                                                    >
                                                        <a
                                                            onClick={() =>
                                                                setCollapsed(
                                                                    true
                                                                )
                                                            }
                                                            className="nav-link"
                                                        >
                                                            Settings
                                                        </a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link
                                                        href="#"
                                                        activeClassName="active"
                                                    >
                                                        <a
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                handleLogout();
                                                            }}
                                                            className="nav-link"
                                                        >
                                                            Sign out
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            <AddProductsModal />
        </>
    );
};

export default AdminNavbar;
