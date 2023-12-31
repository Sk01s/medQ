import Product from "../../../models/Product";
import Order from "../../../models/Order";
import connectDb from "../../../utils/connectDb";

connectDb();

export default async (req, res) => {
    switch (req.method) {
        case "GET":
            await handleGetRequest(req, res);
            break;
        case "PUT":
            await handlePutRequest(req, res);
            break;
        case "DELETE":
            await handleDeleteRequest(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
};

const handleGetRequest = async (req, res) => {
    console.log("handleGetRequest");
    const { id } = req.query;
    const product = await Product.findOneAndUpdate(
        { _id: id },
        { $inc: { viewCount: 1 } }
    );
    const { productType } = product;
    const related = await Product.find({
        productType: productType,
    })
        .sort({ viewCount: "desc" })
        .limit(4);
    res.status(200).json({ product, related });
};

const handlePutRequest = async (req, res) => {
    console.log("handlePutRequest");
    const { _id, name, price, description, productType, mediaUrl } = req.body;
    await Product.updateOne(
        { _id },
        {
            $set: { name, price, description, productType, mediaUrl },
            $currentDate: { updatedAt: true },
        }
    );
    // console.log(up)
    res.status(203).send("Product Updated");
};

const handleDeleteRequest = async (req, res) => {
    const { _id } = req.query;
    try {
        await Product.findByIdAndDelete({ _id });
        await Cart.updateMany(
            { "products.product": _id },
            { $pull: { products: { product: _id } } }
        );
        await Order.updateMany(
            { "products.product": _id },
            { $pull: { products: { product: _id } } }
        );
        res.status(204).json({});
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting products");
    }
};
