import React from "react";
import { useRecoilState } from "recoil";
import {
    collapsedState,
    modalState,
    searchState,
    productsState,
} from "../../utils/recoil-atoms";
import Link from "../../utils/ActiveLink";
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
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="#" activeClassName="active">
                                            <a
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                                className="nav-link"
                                            >
                                                Home{" "}
                                                <i className="bx bx-chevron-down"></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link
                                                    href="/"
                                                    activeClassName="active"
                                                >
                                                    <a
                                                        onClick={() =>
                                                            setCollapsed(true)
                                                        }
                                                        className="nav-link"
                                                    >
                                                        Home Demo - 1
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    href="/home-demo-2"
                                                    activeClassName="active"
                                                >
                                                    <a
                                                        onClick={() =>
                                                            setCollapsed(true)
                                                        }
                                                        className="nav-link"
                                                    >
                                                        Home Demo - 2
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    href="/home-demo-3"
                                                    activeClassName="active"
                                                >
                                                    <a
                                                        onClick={() =>
                                                            setCollapsed(true)
                                                        }
                                                        className="nav-link"
                                                    >
                                                        Home Demo - 3
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    href="/home-demo-4"
                                                    activeClassName="active"
                                                >
                                                    <a
                                                        onClick={() =>
                                                            setCollapsed(true)
                                                        }
                                                        className="nav-link"
                                                    >
                                                        Home Demo - 4
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item megamenu">
                                        <Link href="#" activeClassName="active">
                                            <a
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                                className="nav-link"
                                            >
                                                Shop{" "}
                                                <i className="bx bx-chevron-down"></i>
                                            </a>
                                        </Link>

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
                                                                    <Link
                                                                        href="/products-left-sidebar"
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
                                                                            Left
                                                                            Sidebar
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-left-sidebar-with-categories"
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
                                                                            Left
                                                                            Sidebar
                                                                            With
                                                                            Categories
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-right-sidebar"
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
                                                                            Right
                                                                            Sidebar
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-right-sidebar-with-categories"
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
                                                                            Right
                                                                            Sidebar
                                                                            With
                                                                            Categories
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-without-sidebar"
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
                                                                            Without
                                                                            Sidebar
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-left-sidebar-fullwidth"
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
                                                                            With
                                                                            Left
                                                                            Sidebar
                                                                            Fullwidth
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-right-sidebar-fullwidth"
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
                                                                            With
                                                                            Right
                                                                            Sidebar
                                                                            Fullwidth
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">
                                                                Shop Styles 2
                                                            </h6>

                                                            <ul className="megamenu-submenu">
                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-left-sidebar"
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
                                                                            Left
                                                                            Sidebar
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-left-sidebar-with-categories"
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
                                                                            Left
                                                                            Sidebar
                                                                            With
                                                                            Categories
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-right-sidebar"
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
                                                                            Right
                                                                            Sidebar
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-right-sidebar-with-categories"
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
                                                                            Right
                                                                            Sidebar
                                                                            With
                                                                            Categories
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-without-sidebar"
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
                                                                            Without
                                                                            Sidebar
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-left-sidebar-fullwidth"
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
                                                                            With
                                                                            Left
                                                                            Sidebar
                                                                            Fullwidth
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-right-sidebar-fullwidth"
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
                                                                            With
                                                                            Right
                                                                            Sidebar
                                                                            Fullwidth
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">
                                                                Shop Styles 3
                                                            </h6>

                                                            <ul className="megamenu-submenu">
                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-left-sidebar"
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
                                                                            Left
                                                                            Sidebar
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-left-sidebar-with-categories"
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
                                                                            Left
                                                                            Sidebar
                                                                            With
                                                                            Categories
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-right-sidebar"
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
                                                                            Right
                                                                            Sidebar
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-right-sidebar-with-categories"
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
                                                                            Right
                                                                            Sidebar
                                                                            With
                                                                            Categories
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-without-sidebar"
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
                                                                            Without
                                                                            Sidebar
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-left-sidebar-fullwidth"
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
                                                                            With
                                                                            Left
                                                                            Sidebar
                                                                            Fullwidth
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-right-sidebar-fullwidth"
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
                                                                            With
                                                                            Right
                                                                            Sidebar
                                                                            Fullwidth
                                                                        </a>
                                                                    </Link>
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
                                                                    <Link
                                                                        href="/checkout"
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
                                                                            Checkout
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-left-sidebar"
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
                                                                            Left
                                                                            Sidebar
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-left-sidebar-with-categories"
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
                                                                            Left
                                                                            Sidebar
                                                                            With
                                                                            Categories
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-right-sidebar"
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
                                                                            Right
                                                                            Sidebar
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-right-sidebar-with-categories"
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
                                                                            Right
                                                                            Sidebar
                                                                            With
                                                                            Categories
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item megamenu">
                                        <Link href="#" activeClassName="active">
                                            <a
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                                className="nav-link"
                                            >
                                                Pages{" "}
                                                <i className="bx bx-chevron-down"></i>
                                            </a>
                                        </Link>

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
                                                                    <Link
                                                                        href="/about"
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
                                                                            About
                                                                            Us
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/history"
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
                                                                            History
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                {user ? (
                                                                    <li className="nav-item">
                                                                        <Link
                                                                            href="/auth"
                                                                            activeClassName="active"
                                                                        >
                                                                            <a
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
                                                                        </Link>
                                                                    </li>
                                                                ) : (
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
                                                                                Login
                                                                            </a>
                                                                        </Link>
                                                                    </li>
                                                                )}

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/faq"
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
                                                                            FAQ's
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/404"
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
                                                                            404
                                                                            Error
                                                                            Page
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/coming-soon"
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
                                                                            Coming
                                                                            Soon
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/track-order"
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
                                                                            Tracking
                                                                            Order
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">
                                                                Pages II
                                                            </h6>

                                                            <ul className="megamenu-submenu">
                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/categories"
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
                                                                            Categories
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/gallery"
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
                                                                            Gallery
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/customer-service"
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
                                                                            Customer
                                                                            Service
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/purchase-guide"
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
                                                                            Purchase
                                                                            Guide
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/privacy-policy"
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
                                                                            Privacy
                                                                            Policy
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/terms-of-service"
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
                                                                            Terms
                                                                            of
                                                                            Service
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/auth"
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
                                                                            Signup
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">
                                                                Shop Styles
                                                            </h6>

                                                            <ul className="megamenu-submenu">
                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-left-sidebar"
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
                                                                            Left
                                                                            Sidebar
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-left-sidebar-with-categories"
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
                                                                            Left
                                                                            Sidebar
                                                                            With
                                                                            Categories
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-right-sidebar"
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
                                                                            Right
                                                                            Sidebar
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-right-sidebar-with-categories"
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
                                                                            Right
                                                                            Sidebar
                                                                            With
                                                                            Categories
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-without-sidebar"
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
                                                                            Without
                                                                            Sidebar
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-left-sidebar-fullwidth"
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
                                                                            With
                                                                            Left
                                                                            Sidebar
                                                                            Fullwidth
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-right-sidebar-fullwidth"
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
                                                                            With
                                                                            Right
                                                                            Sidebar
                                                                            Fullwidth
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">
                                                                Product Pages
                                                            </h6>

                                                            <ul className="megamenu-submenu">
                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/single-products-1"
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
                                                                            Single
                                                                            Products
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                {/* <li className="nav-item">
                                                                    <Link href="/cart" activeClassName="active">
                                                                        <a onClick={() => setCollapsed(true)} className="nav-link">Cart</a>
                                                                    </Link>
                                                                </li> */}

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/checkout"
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
                                                                            Checkout
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-left-sidebar"
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
                                                                            Left
                                                                            Sidebar
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-left-sidebar-with-categories"
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
                                                                            Left
                                                                            Sidebar
                                                                            With
                                                                            Categories
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-right-sidebar"
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
                                                                            Right
                                                                            Sidebar
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-right-sidebar-with-categories"
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
                                                                            Right
                                                                            Sidebar
                                                                            With
                                                                            Categories
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item megamenu">
                                        <Link href="#" activeClassName="active">
                                            <a
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                                className="nav-link"
                                            >
                                                Collection{" "}
                                                <i className="bx bx-chevron-down"></i>
                                            </a>
                                        </Link>

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
                                                                    <Link
                                                                        href="/products-left-sidebar"
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
                                                                            Left
                                                                            Sidebar
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-left-sidebar-with-categories"
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
                                                                            Left
                                                                            Sidebar
                                                                            With
                                                                            Categories
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-right-sidebar"
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
                                                                            Right
                                                                            Sidebar
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-right-sidebar-with-categories"
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
                                                                            Right
                                                                            Sidebar
                                                                            With
                                                                            Categories
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-without-sidebar"
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
                                                                            Without
                                                                            Sidebar
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-left-sidebar-fullwidth"
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
                                                                            With
                                                                            Left
                                                                            Sidebar
                                                                            Fullwidth
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-right-sidebar-fullwidth"
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
                                                                            With
                                                                            Right
                                                                            Sidebar
                                                                            Fullwidth
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">
                                                                Product Pages
                                                            </h6>

                                                            <ul className="megamenu-submenu">
                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/single-products-1"
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
                                                                            Single
                                                                            Products
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                {/* <li className="nav-item">
                                                                    <Link href="/cart" activeClassName="active">
                                                                        <a onClick={() => setCollapsed(true)} className="nav-link">Cart</a>
                                                                    </Link>
                                                                </li> */}

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/checkout"
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
                                                                            Checkout
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-left-sidebar"
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
                                                                            Left
                                                                            Sidebar
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-left-sidebar-with-categories"
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
                                                                            Left
                                                                            Sidebar
                                                                            With
                                                                            Categories
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-right-sidebar"
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
                                                                            Right
                                                                            Sidebar
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/products-right-sidebar-with-categories"
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
                                                                            Right
                                                                            Sidebar
                                                                            With
                                                                            Categories
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="col">
                                                            <h6 className="submenu-title">
                                                                Pages I
                                                            </h6>

                                                            <ul className="megamenu-submenu">
                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/about"
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
                                                                            About
                                                                            Us
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/history"
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
                                                                            History
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/auth"
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
                                                                            Login
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/faq"
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
                                                                            FAQ's
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/404"
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
                                                                            404
                                                                            Error
                                                                            Page
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/coming-soon"
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
                                                                            Coming
                                                                            Soon
                                                                        </a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link
                                                                        href="/track-order"
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
                                                                            Tracking
                                                                            Order
                                                                        </a>
                                                                    </Link>
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

                                                                        <Link href="#">
                                                                            <a className="link-btn"></a>
                                                                        </Link>
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

                                                                        <Link href="#">
                                                                            <a className="link-btn"></a>
                                                                        </Link>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#">
                                            <a
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                                className="nav-link"
                                            >
                                                Blog{" "}
                                                <i className="bx bx-chevron-down"></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link
                                                    href="/blog1"
                                                    activeClassName="active"
                                                >
                                                    <a
                                                        onClick={() =>
                                                            setCollapsed(true)
                                                        }
                                                        className="nav-link"
                                                    >
                                                        Grid (2 in Row)
                                                    </a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link
                                                    href="/blog2"
                                                    activeClassName="active"
                                                >
                                                    <a
                                                        onClick={() =>
                                                            setCollapsed(true)
                                                        }
                                                        className="nav-link"
                                                    >
                                                        Grid (3 in Row)
                                                    </a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link
                                                    href="/blog3"
                                                    activeClassName="active"
                                                >
                                                    <a
                                                        onClick={() =>
                                                            setCollapsed(true)
                                                        }
                                                        className="nav-link"
                                                    >
                                                        Right Sidebar
                                                    </a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link
                                                    href="/blog-details"
                                                    activeClassName="active"
                                                >
                                                    <a
                                                        onClick={() =>
                                                            setCollapsed(true)
                                                        }
                                                        className="nav-link"
                                                    >
                                                        Blog Details
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            href="/contact"
                                            activeClassName="active"
                                        >
                                            <a
                                                onClick={() =>
                                                    setCollapsed(true)
                                                }
                                                className="nav-link"
                                            >
                                                Contact
                                            </a>
                                        </Link>
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
                                        <Link href="#">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    toggleModal();
                                                }}
                                            >
                                                <i className="bx bx-shopping-bag"></i>
                                                <span>
                                                    {cartProducts.length}
                                                </span>
                                            </a>
                                        </Link>
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
