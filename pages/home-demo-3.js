import axios from "axios";
import baseUrl from "../utils/baseUrl";
import MainBanner from "../components/HomeDemo3/MainBanner";
import FacilityStyleOne from "../components/Common/FacilityStyleOne";
import BestSellingProductsStyleOne from "../components/Products/BestSellingProductsStyleOne";
import CategoriesStyleThree from "../components/ProductCategories/CategoriesStyleThree";
import NewArrivals from "../components/Products/NewArrivals";
import ProductsPromotionStyleTwo from "../components/ProductsPromotions/ProductsPromotionStyleTwo";
import BlogPostStyleOne from "../components/Common/BlogPostStyleOne";
import SellingBrandsStyleTwo from "../components/Common/SellingBrandsStyleTwo";

const HomeDemo3 = ({ products }) => {
    return (
        <>
            <MainBanner />

            <FacilityStyleOne />

            <div className="pt-70">
                <BestSellingProductsStyleOne products={products} />
            </div>

            <div className="pb-40">
                <CategoriesStyleThree />
            </div>

            <NewArrivals products={products} />

            <div className="pb-70">
                <ProductsPromotionStyleTwo />
            </div>

            <BlogPostStyleOne />

            <SellingBrandsStyleTwo />
        </>
    );
};

HomeDemo3.getInitialProps = async (ctx) => {
    // console.log(ctx.query)
    const page = ctx.query.page ? ctx.query.page : "1";
    const size = 8;
    const searchTerm = "medical";
    // fetch data on server
    try {
        const url = `${process.env.BASE_URL}/api/products`;
        const payload = { params: { page, size, searchTerm } };
        const response = await axios.get(url, payload);
        // return response data as an object
        return response.data;
    } catch (error) {
        console.log("home 2", error);
    }

    // note: this object will be merge with existing props
};

export default HomeDemo3;
