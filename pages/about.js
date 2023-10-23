import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import AboutContent from '../components/About/AboutContent';
import Funfacts from '../components/About/Funfacts';
import WhyChooseUs from '../components/About/WhyChooseUs';
import FeedbackStyleOne from '../components/Common/FeedbackStyleOne';
import Doctors from '../components/About/Doctors';
import FacilityStyleOne from '../components/Common/FacilityStyleOne';

const About = () => {
    return (
        <>
            <PageBanner
                pageTitle="About" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="About" 
            />
            
            <AboutContent />

            <Funfacts />

            <WhyChooseUs />

            <FeedbackStyleOne />

            <Doctors />
            
            <FacilityStyleOne />
        </>
    )
}

export default About;