import React from "react";
import { useRecoilState } from "recoil";
import {
    collapsedState,
    modalState,
    searchState,
    productsState,
} from "../../utils/recoil-atoms";
// import Link from "../../utils/ActiveLink";
import ShoppingCartModal from "./ShoppingCartModal";
import SearchFormModal from "./SearchFormModal";
import { handleLogout } from "../../utils/auth";

const Navbar = ({ user }) => {
    const [collapsed, setCollapsed] = useRecoilState(collapsedState);
    const [modal, setModal] = useRecoilState(modalState);
    const [search, setSearchModal] = useRecoilState(searchState);
    const [cartProducts, setCartProducts] = useRecoilState(productsState);

    React.useEffect(() => {
        setCartProducts(JSON.parse(localStorage.getItem("myCart")) || []);
    }, []);
    // console.log(cart)

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    };

    const toggleModal = () => {
        setModal(!modal);
        // console.log(modal)
    };

    const toggleSearch = () => {
        setSearchModal(!search);
        // console.log(modal)
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
            <div id="navbar" className="navbar-area">
                <div className="medq-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <a
                                href="/"
                                onClick={() => setCollapsed(true)}
                                className="navbar-brand"
                            >
                                <img src="/img/logo.png" alt="logo" />
                            </a>

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
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a
                                            href="#"
                                            onClick={(e) => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Home{" "}
                                            <i className="bx bx-chevron-down"></i>
                                        </a>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a
                                                    href="/"
                                                    onClick={() =>
                                                        setCollapsed(true)
                                                    }
                                                    className="nav-link"
                                                >
                                                    Home Demo - 1
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    href="/home-demo-2"
                                                    onClick={() =>
                                                        setCollapsed(true)
                                                    }
                                                    className="nav-link"
                                                >
                                                    Home Demo - 2
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    href="/home-demo-3"
                                                    onClick={() =>
                                                        setCollapsed(true)
                                                    }
                                                    className="nav-link"
                                                >
                                                    Home Demo - 3
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    href="/home-demo-4"
                                                    onClick={() =>
                                                        setCollapsed(true)
                                                    }
                                                    className="nav-link"
                                                >
                                                    Home Demo - 4
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item megamenu">
                                        <a
                                            href="#"
                                            onClick={(e) => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Shop{" "}
                                            <i className="bx bx-chevron-down"></i>
                                        </a>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col">
                                                            <h6 className="submenu-title">
                                                                Shop Styles
                                                            </h6>

                                                            <ul className="megamenu-submenu">
                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-left-sidebar"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Left
                                                                        Sidebar
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-left-sidebar-with-categories"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Left
                                                                        Sidebar
                                                                        With
                                                                        Categories
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-right-sidebar"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Right
                                                                        Sidebar
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-right-sidebar-with-categories"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Right
                                                                        Sidebar
                                                                        With
                                                                        Categories
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-without-sidebar"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Without
                                                                        Sidebar
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-left-sidebar-fullwidth"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        With
                                                                        Left
                                                                        Sidebar
                                                                        Fullwidth
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-right-sidebar-fullwidth"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        With
                                                                        Right
                                                                        Sidebar
                                                                        Fullwidth
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">
                                                                Shop Styles 2
                                                            </h6>

                                                            <ul className="megamenu-submenu">
                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-left-sidebar"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Left
                                                                        Sidebar
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-left-sidebar-with-categories"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Left
                                                                        Sidebar
                                                                        With
                                                                        Categories
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-right-sidebar"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Right
                                                                        Sidebar
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-right-sidebar-with-categories"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Right
                                                                        Sidebar
                                                                        With
                                                                        Categories
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-without-sidebar"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Without
                                                                        Sidebar
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-left-sidebar-fullwidth"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        With
                                                                        Left
                                                                        Sidebar
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-right-sidebar-fullwidth"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        With
                                                                        Right
                                                                        Sidebar
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">
                                                                Shop Styles 3
                                                            </h6>

                                                            <ul className="megamenu-submenu">
                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-left-sidebar"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Left
                                                                        Sidebar
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-left-sidebar-with-categories"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Left
                                                                        Sidebar
                                                                        With
                                                                        Categories
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-right-sidebar"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Right
                                                                        Sidebar
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-right-sidebar-with-categories"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Right
                                                                        Sidebar
                                                                        With
                                                                        Categories
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-without-sidebar"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Without
                                                                        Sidebar
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-left-sidebar-fullwidth"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        With
                                                                        Left
                                                                        Sidebar
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-right-sidebar-fullwidth"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        With
                                                                        Right
                                                                        Sidebar
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">
                                                                Product Pages
                                                            </h6>

                                                            <ul className="megamenu-submenu">
                                                                {/* <li className="nav-item">
                                                                    <Link href="/cart" activeClassName="active">
                                                                        <a onClick={() => setCollapsed(true)} className="nav-link">Cart</a>
                                                                    </Link>
                                                                </li> */}

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/checkout"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Checkout
                                                                    </a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-left-sidebar"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Left
                                                                        Sidebar
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-left-sidebar-with-categories"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Left
                                                                        Sidebar
                                                                        With
                                                                        Categories
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-right-sidebar"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Right
                                                                        Sidebar
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-right-sidebar-with-categories"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Right
                                                                        Sidebar
                                                                        With
                                                                        Categories
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item megamenu">
                                        <a
                                            href="#"
                                            onClick={(e) => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Pages{" "}
                                            <i className="bx bx-chevron-down"></i>
                                        </a>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col">
                                                            <h6 className="submenu-title">
                                                                Pages I
                                                            </h6>

                                                            <ul className="megamenu-submenu">
                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/about"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        About Us
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/history"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        History
                                                                    </a>
                                                                </li>
                                                                {user ? (
                                                                    <li className="nav-item">
                                                                        <a
                                                                            href="/auth"
                                                                            onClick={(
                                                                                e
                                                                            ) => {
                                                                                e.preventDefault();
                                                                                handleLogout();
                                                                            }}
                                                                            className="nav-link"
                                                                        >
                                                                            Logout
                                                                        </a>
                                                                    </li>
                                                                ) : (
                                                                    <li className="nav-item">
                                                                        <a
                                                                            href="#"
                                                                            onClick={() =>
                                                                                setCollapsed(
                                                                                    true
                                                                                )
                                                                            }
                                                                            className="nav-link"
                                                                        >
                                                                            Login
                                                                        </a>
                                                                    </li>
                                                                )}

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/faq"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        FAQ's
                                                                    </a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/404"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        404
                                                                        Error
                                                                        Page
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/coming-soon"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Coming
                                                                        Soon
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/track-order"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Tracking
                                                                        Order
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">
                                                                Pages II
                                                            </h6>

                                                            <ul className="megamenu-submenu">
                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/categories"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Categories
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/gallery"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Gallery
                                                                    </a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/customer-service"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Customer
                                                                        Service
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/purchase-guide"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Purchase
                                                                        Guide
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/privacy-policy"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Privacy
                                                                        Policy
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/terms-of-service"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Terms of
                                                                        Service
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/auth"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Signup
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">
                                                                Shop Styles
                                                            </h6>

                                                            <ul className="megamenu-submenu">
                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-left-sidebar"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Left
                                                                        Sidebar
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-left-sidebar-with-categories"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Left
                                                                        Sidebar
                                                                        With
                                                                        Categories
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-right-sidebar"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Right
                                                                        Sidebar
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-right-sidebar-with-categories"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Right
                                                                        Sidebar
                                                                        With
                                                                        Categories
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-without-sidebar"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Without
                                                                        Sidebar
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-left-sidebar-fullwidth"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        With
                                                                        Left
                                                                        Sidebar
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-right-sidebar-fullwidth"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        With
                                                                        Right
                                                                        Sidebar
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">
                                                                Product Pages
                                                            </h6>

                                                            <ul className="megamenu-submenu">
                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/single-products-1"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Single
                                                                        Products
                                                                    </a>
                                                                </li>

                                                                {/* <li className="nav-item">
                                                                    <Link href="/cart" activeClassName="active">
                                                                        <a onClick={() => setCollapsed(true)} className="nav-link">Cart</a>
                                                                    </Link>
                                                                </li> */}

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/checkout"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Checkout
                                                                    </a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-left-sidebar"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Left
                                                                        Sidebar
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-left-sidebar-with-categories"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Left
                                                                        Sidebar
                                                                        With
                                                                        Categories
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-right-sidebar"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Right
                                                                        Sidebar
                                                                    </a>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <a
                                                                        href="/products-right-sidebar-with-categories"
                                                                        onClick={() =>
                                                                            setCollapsed(
                                                                                true
                                                                            )
                                                                        }
                                                                        className="nav-link"
                                                                    >
                                                                        Right
                                                                        Sidebar
                                                                        With
                                                                        Categories
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item megamenu">
                                        <a
                                            href="#"
                                            onClick={(e) => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Collection{" "}
                                            <i className="bx bx-chevron-down"></i>
                                        </a>
                                    </li>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col">
                                                        <h6 className="submenu-title">
                                                            Shop Styles
                                                        </h6>

                                                        <ul className="megamenu-submenu">
                                                            <li className="nav-item">
                                                                <a
                                                                    href="/products-left-sidebar"
                                                                    onClick={() =>
                                                                        setCollapsed(
                                                                            true
                                                                        )
                                                                    }
                                                                    className="nav-link"
                                                                >
                                                                    Left Sidebar
                                                                </a>
                                                            </li>

                                                            <li className="nav-item">
                                                                <a
                                                                    href="/products-left-sidebar-with-categories"
                                                                    onClick={() =>
                                                                        setCollapsed(
                                                                            true
                                                                        )
                                                                    }
                                                                    className="nav-link"
                                                                >
                                                                    Left Sidebar
                                                                    With
                                                                    Categories
                                                                </a>
                                                            </li>

                                                            <li className="nav-item">
                                                                <a
                                                                    href="/products-right-sidebar"
                                                                    onClick={() =>
                                                                        setCollapsed(
                                                                            true
                                                                        )
                                                                    }
                                                                    className="nav-link"
                                                                >
                                                                    Right
                                                                    Sidebar
                                                                </a>
                                                            </li>

                                                            <li className="nav-item">
                                                                <a
                                                                    href="/products-right-sidebar-with-categories"
                                                                    onClick={() =>
                                                                        setCollapsed(
                                                                            true
                                                                        )
                                                                    }
                                                                    className="nav-link"
                                                                >
                                                                    Right
                                                                    Sidebar With
                                                                    Categories
                                                                </a>
                                                            </li>

                                                            <li className="nav-item">
                                                                <a
                                                                    href="/products-without-sidebar"
                                                                    onClick={() =>
                                                                        setCollapsed(
                                                                            true
                                                                        )
                                                                    }
                                                                    className="nav-link"
                                                                >
                                                                    Without
                                                                    Sidebar
                                                                </a>
                                                            </li>

                                                            <li className="nav-item">
                                                                <a
                                                                    href="/products-left-sidebar-fullwidth"
                                                                    onClick={() =>
                                                                        setCollapsed(
                                                                            true
                                                                        )
                                                                    }
                                                                    className="nav-link"
                                                                >
                                                                    With Left
                                                                    Sidebar
                                                                </a>
                                                            </li>

                                                            <li className="nav-item">
                                                                <a
                                                                    href="/products-right-sidebar-fullwidth"
                                                                    onClick={() =>
                                                                        setCollapsed(
                                                                            true
                                                                        )
                                                                    }
                                                                    className="nav-link"
                                                                >
                                                                    With Right
                                                                    Sidebar
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col">
                                                        <h6 className="submenu-title">
                                                            Product Pages
                                                        </h6>

                                                        <ul className="megamenu-submenu">
                                                            <li className="nav-item">
                                                                <a
                                                                    href="/single-products-1"
                                                                    onClick={() =>
                                                                        setCollapsed(
                                                                            true
                                                                        )
                                                                    }
                                                                    className="nav-link"
                                                                >
                                                                    Single
                                                                    Products
                                                                </a>
                                                            </li>

                                                            {/* <li className="nav-item">
                                                                    <Link href="/cart" activeClassName="active">
                                                                        <a onClick={() => setCollapsed(true)} className="nav-link">Cart</a>
                                                                    </Link>
                                                                </li> */}

                                                            <li className="nav-item">
                                                                <a
                                                                    href="/checkout"
                                                                    onClick={() =>
                                                                        setCollapsed(
                                                                            true
                                                                        )
                                                                    }
                                                                    className="nav-link"
                                                                >
                                                                    Checkout
                                                                </a>
                                                            </li>

                                                            <li className="nav-item">
                                                                <a
                                                                    href="/products-left-sidebar"
                                                                    onClick={() =>
                                                                        setCollapsed(
                                                                            true
                                                                        )
                                                                    }
                                                                    className="nav-link"
                                                                >
                                                                    Left Sidebar
                                                                </a>
                                                            </li>

                                                            <li className="nav-item">
                                                                <a
                                                                    href="/products-left-sidebar-with-categories"
                                                                    onClick={() =>
                                                                        setCollapsed(
                                                                            true
                                                                        )
                                                                    }
                                                                    className="nav-link"
                                                                >
                                                                    Left Sidebar
                                                                    With
                                                                    Categories
                                                                </a>
                                                            </li>

                                                            <li className="nav-item">
                                                                <a
                                                                    href="/products-right-sidebar"
                                                                    onClick={() =>
                                                                        setCollapsed(
                                                                            true
                                                                        )
                                                                    }
                                                                    className="nav-link"
                                                                >
                                                                    Right
                                                                    Sidebar
                                                                </a>
                                                            </li>

                                                            <li className="nav-item">
                                                                <a
                                                                    href="/products-right-sidebar-with-categories"
                                                                    onClick={() =>
                                                                        setCollapsed(
                                                                            true
                                                                        )
                                                                    }
                                                                    className="nav-link"
                                                                >
                                                                    Right
                                                                    Sidebar With
                                                                    Categories
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col">
                                                        <h6 className="submenu-title">
                                                            Pages I
                                                        </h6>

                                                        <ul className="megamenu-submenu">
                                                            <li className="nav-item">
                                                                <a
                                                                    href="/about"
                                                                    onClick={() =>
                                                                        setCollapsed(
                                                                            true
                                                                        )
                                                                    }
                                                                    className="nav-link"
                                                                >
                                                                    About Us
                                                                </a>
                                                            </li>

                                                            <li className="nav-item">
                                                                <a
                                                                    href="/history"
                                                                    onClick={() =>
                                                                        setCollapsed(
                                                                            true
                                                                        )
                                                                    }
                                                                    className="nav-link"
                                                                >
                                                                    History
                                                                </a>
                                                            </li>

                                                            <li className="nav-item">
                                                                <a
                                                                    href="/auth"
                                                                    onClick={() =>
                                                                        setCollapsed(
                                                                            true
                                                                        )
                                                                    }
                                                                    className="nav-link"
                                                                >
                                                                    Login
                                                                </a>
                                                            </li>

                                                            <li className="nav-item">
                                                                <a
                                                                    href="/faq"
                                                                    onClick={() =>
                                                                        setCollapsed(
                                                                            true
                                                                        )
                                                                    }
                                                                    className="nav-link"
                                                                >
                                                                    FAQ's
                                                                </a>
                                                            </li>

                                                            <li className="nav-item">
                                                                <a
                                                                    href="/404"
                                                                    onClick={() =>
                                                                        setCollapsed(
                                                                            true
                                                                        )
                                                                    }
                                                                    className="nav-link"
                                                                >
                                                                    404 Error
                                                                    Page
                                                                </a>
                                                            </li>

                                                            <li className="nav-item">
                                                                <a
                                                                    href="/coming-soon"
                                                                    onClick={() =>
                                                                        setCollapsed(
                                                                            true
                                                                        )
                                                                    }
                                                                    className="nav-link"
                                                                >
                                                                    Coming Soon
                                                                </a>
                                                            </li>

                                                            <li className="nav-item">
                                                                <a
                                                                    href="/track-order"
                                                                    onClick={() =>
                                                                        setCollapsed(
                                                                            true
                                                                        )
                                                                    }
                                                                    className="nav-link"
                                                                >
                                                                    Tracking
                                                                    Order
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col">
                                                        <ul className="megamenu-submenu">
                                                            <li>
                                                                <div className="aside-trending-products">
                                                                    <img
                                                                        src="/img/navbar/navbar-img1.jpg"
                                                                        alt="image"
                                                                    />

                                                                    <div className="category">
                                                                        <h4>
                                                                            Top
                                                                            Trending
                                                                        </h4>
                                                                    </div>

                                                                    <a
                                                                        href="#"
                                                                        className="link-btn"
                                                                    ></a>
                                                                </div>

                                                                <div className="aside-trending-products">
                                                                    <img
                                                                        src="/img/navbar/navbar-img2.jpg"
                                                                        alt="image"
                                                                    />

                                                                    <div className="category">
                                                                        <h4>
                                                                            Popular
                                                                            Products
                                                                        </h4>
                                                                    </div>

                                                                    <a
                                                                        href="#"
                                                                        className="link-btn"
                                                                    ></a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <li className="nav-item">
                                        <a
                                            href="#"
                                            onClick={(e) => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Blog{" "}
                                            <i className="bx bx-chevron-down"></i>
                                        </a>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a
                                                    href="/blog1"
                                                    onClick={() =>
                                                        setCollapsed(true)
                                                    }
                                                    className="nav-link"
                                                >
                                                    Grid (2 in Row)
                                                </a>
                                            </li>

                                            <li className="nav-item">
                                                <a
                                                    href="/blog2"
                                                    onClick={() =>
                                                        setCollapsed(true)
                                                    }
                                                    className="nav-link"
                                                >
                                                    Grid (3 in Row)
                                                </a>
                                            </li>

                                            <li className="nav-item">
                                                <a
                                                    href="/blog3"
                                                    onClick={() =>
                                                        setCollapsed(true)
                                                    }
                                                    className="nav-link"
                                                >
                                                    Right Sidebar
                                                </a>
                                            </li>

                                            <li className="nav-item">
                                                <a
                                                    href="/blog-details"
                                                    onClick={() =>
                                                        setCollapsed(true)
                                                    }
                                                    className="nav-link"
                                                >
                                                    Blog Details
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <a
                                            href="/contact"
                                            onClick={() => setCollapsed(true)}
                                            className="nav-link"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="others-option">
                                <div className="option-item">
                                    <div className="wishlist-btn">
                                        <a
                                            href="#"
                                            data-toggle="modal"
                                            data-target="#shoppingWishlistModal"
                                        >
                                            <i className="bx bx-heart"></i>
                                        </a>
                                    </div>
                                </div>

                                <div className="option-item">
                                    <div className="cart-btn">
                                        <a
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                toggleModal();
                                            }}
                                        >
                                            <i className="bx bx-shopping-bag"></i>
                                            <span>{cartProducts.length}</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="option-item">
                                    <div
                                        className="search-btn-box"
                                        onClick={toggleSearch}
                                    >
                                        <i className="search-btn bx bx-search-alt"></i>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            {modal ? <ShoppingCartModal products={cartProducts} /> : null}

            <SearchFormModal />
        </>
    );
};

export default Navbar;
