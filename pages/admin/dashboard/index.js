import React from "react";

const Index = () => {
    return (
        <>
            <div className="admin-main-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="admin-card">
                                <i className="bx bx-user-plus"></i>
                                <h3>55</h3>
                                <p>All Users</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="admin-card">
                                <i className="bx bx-list-check"></i>
                                <h3>24</h3>
                                <p>All Orders</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="admin-card">
                                <i className="bx bx-cart"></i>
                                <h3>333</h3>
                                <p>All Products</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
