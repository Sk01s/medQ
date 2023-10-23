import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import BlogGrid3Row from '../components/Blog/BlogGrid3Row';
import FacilityStyleOne from '../components/Common/FacilityStyleOne';

const Blog2 = () => {
    return (
        <>
            <PageBanner
                pageTitle="Blog Grid (3 in Row)" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Blog" 
            />

            <BlogGrid3Row />
    
            <FacilityStyleOne />
        </>
    )
}

export default Blog2;