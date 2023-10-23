import React from "react";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { ToastContainer, Slide } from "react-toastify";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";
import AdminNavbar from "./AdminNavbar";
import Footer from "./Footer";
import GoTop from "./GoTop";
import { useRecoilState } from "recoil";
import {
    qModalState,
    collapsedState,
    modalState,
    searchState,
    productsState,
} from "../../utils/recoil-atoms";
import ProductsQuickViewModal from "./ProductsQuickViewModal";
import Loader from "./Loader";

const Layout = ({ children, user }) => {
    const [loading, setLoading] = React.useState(true);
    // console.log(user)
    const [qModal, setQModal] = useRecoilState(qModalState);
    const [collapsed, setCollapsed] = useRecoilState(collapsedState);
    const [modal, setModal] = useRecoilState(modalState);
    const [search, setSearchModal] = useRecoilState(searchState);
    const isAdmin = user && user.role == "admin";

    React.useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    Router.events.on("routeChangeStart", () => {
        setLoading(true);
    });
    Router.events.on("routeChangeError", () => {
        setLoading(false);
    });
    Router.events.on("routeChangeComplete", () => {
        setLoading(false);
    });

    Router.events.on("routeChangeStart", () => {
        setQModal(false);
        setCollapsed(false);
        setModal(false);
        setSearchModal(false);
    });
    return (
        <>
            <Head>
                <title>MedQ - Medical Health Functional eShop Template</title>
                <link
                    rel="icon"
                    type="image/png"
                    href="/img/favicon.png"
                ></link>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta
                    name="description"
                    content="MedQ - Medical Health Functional eShop Template. This has been built with React, Next.js, Express.js, and ES6+"
                />
                <meta
                    name="og:title"
                    property="og:title"
                    content="MedQ - Medical Health Functional eShop Template"
                ></meta>
                <meta
                    name="twitter:card"
                    content="MedQ - Medical Health Functional eShop Template"
                ></meta>
                <link
                    rel="canonical"
                    href="https://medq-react.envytheme.com/"
                ></link>
                <meta
                    property="og:image"
                    content="https://demaxin.s3.ap-south-1.amazonaws.com/cd19-2-1589216093113.jpg"
                />
            </Head>
            {loading && <Loader />}

            {isAdmin ? (
                <AdminNavbar />
            ) : (
                <>
                    <TopHeader user={user} />
                    <Navbar user={user} />
                </>
            )}

            {children}

            <ToastContainer transition={Slide} />

            <GoTop scrollStepInPx="100" delayInMs="10.50" />

            {qModal ? <ProductsQuickViewModal /> : null}

            <Footer />
        </>
    );
};

export default Layout;
