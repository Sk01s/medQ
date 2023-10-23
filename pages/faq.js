import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import FaqsContent from '../components/Faqs/FaqsContent';
import FacilityStyleOne from '../components/Common/FacilityStyleOne';

const Faq = () => {
    return (
        <>
            <PageBanner
                pageTitle="Faq" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Faq" 
            />
            
            <FaqsContent />

            <FacilityStyleOne />
        </>
    )
}

export default Faq;