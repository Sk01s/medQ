import "../public/css/bootstrap.min.css";
import "../public/css/animate.min.css";
import "../public/css/boxicons.min.css";
import "../public/css/flaticon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-toastify/dist/ReactToastify.css";
import "react-18-image-lightbox/style.css";
import "swiper/css";
import "swiper/css/bundle";

import "../public/css/style.css";
import "../public/css/admin.css";
import "../public/css/responsive.css";
import "../public/css/loader.css";
import "../public/css/rtl.css";

import { RecoilRoot } from "recoil";
import axios from "axios";
import { parseCookies, destroyCookie } from "nookies";
import Layout from "../components/_App/Layout";
import { redirectUser } from "../utils/auth";
import baseUrl from "../utils/baseUrl";

const MyApp = ({ Component, pageProps }) => {
    return (
        <RecoilRoot>
            <Layout {...pageProps}>
                <Component {...pageProps} />
            </Layout>
        </RecoilRoot>
    );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
    const { medq_token } = parseCookies(ctx);
    let pageProps = {};

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }

    if (!medq_token) {
        const isProtectedRoute = ctx.pathname === "/admin/dashboard";
        if (isProtectedRoute) {
            redirectUser(ctx, "/auth");
        }
    } else {
        try {
            const payload = { headers: { Authorization: medq_token } };
            const url = `${baseUrl}/api/users/account`;
            const response = await axios.get(url, payload);
            const user = response.data;
            const isAdmin = user.role == "admin";
            const isNotPermitted =
                !isAdmin && ctx.pathname === "/admin/dashboard";
            if (isNotPermitted) {
                redirectUser(ctx, "/products");
            }
            pageProps.user = user;
        } catch (error) {
            console.log("_app", error);
            destroyCookie(ctx, "medq_token");
        }
    }
    return { pageProps };
};

export default MyApp;
