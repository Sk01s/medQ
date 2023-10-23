import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import FacilityStyleOne from '../components/Common/FacilityStyleOne';

const ProfileAuthentication = () => {
    return (
        <>
            <PageBanner
                pageTitle="All In One Package Tracking" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Tracking Order" 
            />

            <section className="track-order-area ptb-70">
                <div className="container">
                    <div className="track-order-content">
                        <form>
                            <div className="form-group">
                                <label>Order ID</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="form-group">
                                <label>Billing E-mail</label>
                                <input type="email" className="form-control" />
                            </div>

                            <button type="submit" className="default-btn">Track Order</button>
                        </form>
                    </div>
                </div>
            </section>
 
            <FacilityStyleOne />
        </>
    )
}

export default ProfileAuthentication;