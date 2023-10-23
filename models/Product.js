// Product Model
import mongoose from 'mongoose';

const { String, Number, Boolean } = mongoose.Schema.Types;

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    productType: {
        type: String,
        required: true
    },
    sku: {
        type: String,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    mediaUrl: {
        type: String,
        required: true
    },
    viewCount: {
        type: Number,
        default: 0
    },
    newProduct: {
        type: Boolean,
        required: true,
        default: true,
        enum: [true, false]

    },
    onSale: {
        type: Boolean,
        default: false,
        enum: [true, false]
    },
    onOffer: {
        type: String,
        default: "0"
    }
},{
    timestamps: true
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
