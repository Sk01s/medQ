import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import CategoriesStyleTwo from '../components/ProductCategories/CategoriesStyleTwo';
import CategoriesStyleOne from '../components/ProductCategories/CategoriesStyleOne';
import CategoriesStyleThree from '../components/ProductCategories/CategoriesStyleThree';
import ProductsPromotionStyleOne from '../components/ProductsPromotions/ProductsPromotionStyleOne';
import CategoriesStyleFour from '../components/ProductCategories/CategoriesStyleFour';
import FacilityStyleOne from '../components/Common/FacilityStyleOne';

const Categories = () => {
    return (
        <>
            <PageBanner
                pageTitle="Categories" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Categories" 
            />

            <div className="pt-70 pb-40">
                <CategoriesStyleTwo />
            </div>

            <div className="pb-40">
                <CategoriesStyleOne />
                <CategoriesStyleThree />
            </div>

            <div className="pb-40">
                <ProductsPromotionStyleOne />
            </div>

            <div className="pb-40">
                <CategoriesStyleFour />
            </div>
 
            <FacilityStyleOne />
        </>
    )
}

export default Categories;