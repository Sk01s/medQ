import React from "react";
import Link from "next/link";
import axios from "axios";
import baseUrl from "../utils/baseUrl";
import PageBanner from "../components/Common/PageBanner";
import ProductSidebar from "../components/Products/ProductSidebar";
import AllProducts from "../components/Products/AllProducts";
import FacilityStyleOne from "../components/Common/FacilityStyleOne";
import Pagination from "../components/Products/Pagination";

const ProductsLeftSidebar = ({ products, totalPages }) => {
    return (
        <>
            <PageBanner
                pageTitle="Products Left Sidebar"
                homePageText="Home"
                homePageUrl="/"
                activePageText="Products Left Sidebar"
            />

            <section className="products-area ptb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12">
                            {/* Product Sidebar */}
                            <div className="product-left-sidebar">
                                <ProductSidebar />
                            </div>
                        </div>

                        <div className="col-lg-9 col-md-12">
                            <div className="medq-grid-sorting row align-items-center">
                                <div className="col-lg-6 col-md-6 result-count">
                                    <p>
                                        We found{" "}
                                        <span className="count">
                                            {products.length}
                                        </span>{" "}
                                        products available for you
                                    </p>
                                </div>

                                <div className="col-lg-6 col-md-6 ordering">
                                    <div className="select-box">
                                        <label>Sort By:</label>
                                        <select className="form-control">
                                            <option>Default</option>
                                            <option>Popularity</option>
                                            <option>Latest</option>
                                            <option>Price: low to high</option>
                                            <option>Price: high to low</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* All Products */}
                            <AllProducts products={products} />

                            <Pagination totalPages={totalPages} />
                        </div>
                    </div>
                </div>
            </section>

            <FacilityStyleOne />
        </>
    );
};

ProductsLeftSidebar.getInitialProps = async (ctx) => {
    // console.log(ctx.query)
    const page = ctx.query.page ? ctx.query.page : "1";
    const size = 9;
    const searchTerm = ctx.query.term;
    // fetch data on server
    const url = `${baseUrl}/api/products`;
    const payload = { params: { page, size, searchTerm } };
    console.log(payload, url);
    const response = await axios.get(url, payload);
    // return response data as an object
    return response.data;
    // note: this object will be merge with existing props
};

export default ProductsLeftSidebar;
