import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import PurchaseGuideContent from '../components/PurchaseGuide/PurchaseGuideContent';
import FacilityStyleOne from '../components/Common/FacilityStyleOne';

const PurchaseGuide = () => {
    return (
        <>
            <PageBanner
                pageTitle="Purchase Guide" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Purchase Guide" 
            />
            
            <PurchaseGuideContent />

            <FacilityStyleOne />
        </>
    )
}

export default PurchaseGuide;