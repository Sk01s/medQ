import axios from 'axios';
import baseUrl from '../utils/baseUrl'
import MainBanner from '../components/HomeDemo4/MainBanner'
import CategoriesStyleFour from '../components/ProductCategories/CategoriesStyleFour'
import NewArrivalsSlider from '../components/Products/NewArrivalsSlider'
import DealOfTheWeek from '../components/Products/DealOfTheWeek'
import BestSellingProductsStyleOne from '../components/Products/BestSellingProductsStyleOne'
import CategoriesStyleOne from '../components/ProductCategories/CategoriesStyleOne'
import BlogPostStyleOne from '../components/Common/BlogPostStyleOne'
import FacilityStyleOne from '../components/Common/FacilityStyleOne'

const HomeDemo4 = ({products}) => {
    return (
        <>
            <MainBanner /> 

            <div className="pt-70 pb-40">
                <CategoriesStyleFour />
            </div>

            <NewArrivalsSlider products={products} />

            <DealOfTheWeek products={products} />

            <BestSellingProductsStyleOne products={products} />
          
            <div className="pb-40">
                <CategoriesStyleOne />
            </div>

            <BlogPostStyleOne />
            
            <FacilityStyleOne />
        </>
    )
}

HomeDemo4.getInitialProps = async (ctx) => {
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

export default HomeDemo4;
