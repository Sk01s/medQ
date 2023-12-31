import Product from "../../../models/Product";
import connectDb, { connection } from "../../../utils/connectDb";

connectDb();

export default async (req, res) => {
    const { page, size, searchTerm } = req.query;
    // console.log(searchTerm)
    // string to number
    const pageNum = Number(page);
    const pageSize = Number(size);
    let products = [];
    let totalDocts;
    const get = async () => {
        if (connection.isConnected) {
            if (searchTerm) {
                totalDocts = await Product.countDocuments({
                    $or: [
                        { productType: { $regex: `^${searchTerm}` } },
                        { name: new RegExp(searchTerm, "i") },
                    ],
                });
            } else {
                totalDocts = await Product.countDocuments();
            }
            const totalPages = Math.ceil(totalDocts / pageSize);
            if (searchTerm) {
                if (pageNum === 1) {
                    products = await Product.find({
                        $or: [
                            { productType: { $regex: `^${searchTerm}` } },
                            { name: new RegExp(searchTerm, "i") },
                        ],
                    })
                        .collation({ locale: "en", strength: 1 })
                        .sort({ viewCount: "desc" })
                        .limit(pageSize);
                } else {
                    const skips = pageSize * (pageNum - 1);
                    products = await Product.find({
                        $or: [
                            { productType: { $regex: `^${searchTerm}` } },
                            { name: new RegExp(searchTerm, "i") },
                        ],
                    })
                        .collation({ locale: "en", strength: 1 })
                        .sort({ viewCount: "desc" })
                        .skip(skips)
                        .limit(pageSize);
                }
            } else {
                if (pageNum === 1) {
                    products = await Product.find()
                        .sort({ name: "desc" })
                        .limit(pageSize);
                } else {
                    const skips = pageSize * (pageNum - 1);
                    products = await Product.find()
                        .sort({ name: "desc" })
                        .skip(skips)
                        .limit(pageSize);
                }
            }

            // const products = await Product.find();
            console.log(products);
            res.status(200).json({ products, totalPages });
        } else {
            setTimeout(get, 200);
        }
    };
    try {
        await get();
    } catch (error) {
        res.status(400).json({ error });
    }
};
