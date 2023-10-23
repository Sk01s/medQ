import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import BlogDetailsContent from '../components/Blog/BlogDetailsContent';
import FacilityStyleOne from '../components/Common/FacilityStyleOne';

const BlogDetails = () => {
    return (
        <>
            <PageBanner
                pageTitle="Blog Details" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Blog Details" 
            />
            
            <BlogDetailsContent />

            <FacilityStyleOne />
        </>
    )
}

export default BlogDetails;