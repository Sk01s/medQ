import shortid from 'shortid'
import Product from '../../../models/Product'
import connectDb from '../../../utils/connectDb'

connectDb();

export default async (req, res) => {
    const {name, price, productType, description, mediaUrl, onSale, onOffer} = req.body
    const sku = shortid.generate()

    try {
        if (!name || !price || !description || !productType || !mediaUrl){
            return res.status(422).send("Product missing one or more fields")
        }

        const product = await new Product({
            name,
            price,
            productType,
            description,
            mediaUrl,
            onSale,
            onOffer,
            sku
        }).save()

        res.status(200).json(product);
    } catch (error) {
        console.error(error)
        res.status(500).send("Error creating product on the Server");
    }
}