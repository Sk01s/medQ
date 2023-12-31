import axios from "axios";
import baseUrl from "../utils/baseUrl";
import BannerSlider from "../components/HomeDemo2/BannerSlider";
import ProductsPromotionStyleOne from "../components/ProductsPromotions/ProductsPromotionStyleOne";
import BestSellingProductsStyleOne from "../components/Products/BestSellingProductsStyleOne";
import CategoriesStyleTwo from "../components/ProductCategories/CategoriesStyleTwo";
import NewArrivals from "../components/Products/NewArrivals";
import HotDealOfferStyleOne from "../components/Common/HotDealOfferStyleOne";
import SellingBrandsStyleOne from "../components/Common/SellingBrandsStyleOne";
import CategoriesStyleOne from "../components/ProductCategories/CategoriesStyleOne";
import BlogPostStyleOne from "../components/Common/BlogPostStyleOne";
import FacilityStyleOne from "../components/Common/FacilityStyleOne";

const HomeDemo2 = ({ products }) => {
    return (
        <>
            <BannerSlider />

            <div className="pt-70 pb-40">
                <ProductsPromotionStyleOne />
            </div>

            <BestSellingProductsStyleOne products={products} />

            <div className="pb-40">
                <CategoriesStyleTwo />
            </div>

            <NewArrivals products={products} />

            <HotDealOfferStyleOne />

            <div className="pt-70 pb-40">
                <SellingBrandsStyleOne />
            </div>

            <div className="pb-40">
                <CategoriesStyleOne />
            </div>

            <BlogPostStyleOne />

            <FacilityStyleOne />
        </>
    );
};

HomeDemo2.getInitialProps = async (ctx) => {
    // console.log(ctx.query)
    const page = ctx.query.page ? ctx.query.page : "1";
    const size = 8;
    const searchTerm = "medical";
    // fetch data on server
    try {
        const url = `${baseUrl}/api/products`;
        const payload = { params: { page, size, searchTerm } };
        console.log(payload, url);
        const response = await axios.get(url, payload);
        // return response data as an object
        return response.data;
    } catch (error) {
        console.log("home demo 02 ", error);
    }
    // note: this object will be merge with existing props
};

export default HomeDemo2;
