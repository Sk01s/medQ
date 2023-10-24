import React from "react";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import PageBanner from "../../components/Common/PageBanner";
import ProductDetailsStyleOne from "../../components/ProductDetails/ProductDetailsStyleOne";
import FacilityStyleOne from "../../components/Common/FacilityStyleOne";

const Product = ({ product, related }) => {
    // console.log(product)
    return (
        <>
            <PageBanner
                pageTitle={product.name}
                homePageText="Home"
                homePageUrl="/"
                activePageText={product.name}
            />

            <ProductDetailsStyleOne product={product} related={related} />

            <FacilityStyleOne />
        </>
    );
};

Product.getInitialProps = async ({ query: { id } }) => {
    // console.log(id)
    const url = `${baseUrl}/api/products/product`;
    const payload = { params: { id } };
    console.log(payload, url);
    const response = await axios.get(url, payload);
    // console.log(response)
    return {
        product: response.data.product,
        related: response.data.related,
    };
};

export default Product;
