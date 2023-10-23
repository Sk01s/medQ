import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import GoogleMap from '../components/Contact/GoogleMap';
import FacilityStyleOne from '../components/Common/FacilityStyleOne';

const ContactUs = () => {
    return (
        <>
            <PageBanner
                pageTitle="Contact Us" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Contact Us" 
            />
            <ContactInfo />

            <ContactForm />

            <GoogleMap />
            
            <FacilityStyleOne />
        </>
    )
}

export default ContactUs;