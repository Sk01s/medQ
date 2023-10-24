import React from "react";
import axios from "axios";
import cookie from "js-cookie";
import Router from "next/router";
import { toast } from "react-toastify";
import baseUrl from "../utils/baseUrl";
import catchErrors from "../utils/catchErrors";
import PageBanner from "../components/Common/PageBanner";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import FacilityStyleOne from "../components/Common/FacilityStyleOne";

const Checkout = ({ user }) => {
    // console.log(user)
    const [products, setProducts] = React.useState([]);
    const [success, setSuccess] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setProducts(JSON.parse(localStorage.getItem("myCart")) || []);
    }, []);

    const clearCart = () => {
        localStorage.removeItem("myCart");
        toast.success("Order placed successfully", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    const handleCheckout = async (paymentData) => {
        try {
            setLoading(true);
            const url = `${process.env.BASE_URL}/api/users/checkout`;
            const medq_token = cookie.get("medq_token");
            const payload = { paymentData, products };
            const headers = { headers: { Authorization: medq_token } };
            await axios.post(url, payload, headers);
            setSuccess(true);
            clearCart();
            Router.push("/");
        } catch (error) {
            catchErrors(error, window.alert);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <PageBanner
                pageTitle="Checkout"
                homePageText="Home"
                homePageUrl="/"
                activePageText="Checkout"
            />

            {loading ? "Loading" : ""}

            <CheckoutForm
                handleCheckout={handleCheckout}
                products={products}
                success={success}
                user={user}
            />

            <FacilityStyleOne />
        </>
    );
};

export default Checkout;
// Checkout
