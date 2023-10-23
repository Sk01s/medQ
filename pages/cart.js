import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import CartTable from '../components/Cart/CartTable';
import FacilityStyleOne from '../components/Common/FacilityStyleOne';

const Cart = () => {
    return (
        <>
            <PageBanner
                pageTitle="Cart" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Cart" 
            />
            
            <CartTable />

            <FacilityStyleOne />
        </>
    )
}

export default Cart;