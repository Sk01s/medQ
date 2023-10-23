import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import BlogGrid2Row from '../components/Blog/BlogGrid2Row';
import FacilityStyleOne from '../components/Common/FacilityStyleOne';

const Blog = () => {
    return (
        <>
            <PageBanner
                pageTitle="Blog Grid (2 in Row)" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Blog" 
            />

            <BlogGrid2Row />
    
            <FacilityStyleOne />
        </>
    )
}

export default Blog;