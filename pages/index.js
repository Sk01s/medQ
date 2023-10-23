import axios from 'axios';
import baseUrl from '../utils/baseUrl'
import BannerSlider from '../components/Index/BannerSlider'
import CategoriesStyleOne from '../components/ProductCategories/CategoriesStyleOne'
import CategoriesStyleTwo from '../components/ProductCategories/CategoriesStyleTwo'
import BestSellingProductsStyleOne from '../components/Products/BestSellingProductsStyleOne'
import ProductsPromotionStyleOne from '../components/ProductsPromotions/ProductsPromotionStyleOne'
import NewArrivals from '../components/Products/NewArrivals'
import HotDealOfferStyleOne from '../components/Common/HotDealOfferStyleOne'
import SellingBrandsStyleOne from '../components/Common/SellingBrandsStyleOne'
import BlogPostStyleOne from '../components/Common/BlogPostStyleOne'
import FacilityStyleOne from '../components/Common/FacilityStyleOne'

const Index = ({products}) => {
    // console.log(products)
    return (
        <>
            <BannerSlider />

            <div className="pt-70 pb-40">
                <CategoriesStyleOne />
            </div>

            <div className="pb-40">
                <CategoriesStyleTwo />
            </div>

            <BestSellingProductsStyleOne products={products} />

            <div className="pb-40">
                <ProductsPromotionStyleOne />
            </div>

            <NewArrivals products={products}/>

            <HotDealOfferStyleOne />

            <div className="pt-70 pb-40">
                <SellingBrandsStyleOne />
            </div>

            <BlogPostStyleOne />
            
            <FacilityStyleOne />
        </>
    )
}

Index.getInitialProps = async (ctx) => {
    // console.log(ctx.query)
    const page = ctx.query.page ? ctx.query.page : "1";
    const size = 8;
    const searchTerm = "medical";
    // fetch data on server
    const url = `${baseUrl}/api/products`;
    const payload = { params: {page, size, searchTerm}}
    const response = await axios.get(url, payload);
    // return response data as an object
    return response.data
    // note: this object will be merge with existing props
}

export default Index;
