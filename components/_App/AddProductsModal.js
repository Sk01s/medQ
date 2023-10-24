import React from "react";
import Select from "react-select";
import { useRecoilState } from "recoil";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import catchErrors from "../../utils/catchErrors";
import { addProductState } from "../../utils/recoil-atoms";

const options = [
    { key: "t-shirt", label: "T-Shirt", value: "t-shirt" },
    { key: "fashion", label: "Fashion", value: "fashion" },
    { key: "furniture", label: "Furniture", value: "furniture" },
    { key: "jewelry", label: "Jewelry", value: "jewelry" },
    {
        key: "book-magazine",
        label: "Book and Magazine",
        value: "book-magazine",
    },
    { key: "electronics", label: "Electronics", value: "electronics" },
    { key: "medical", label: "Medical", value: "medical" },
    { key: "home-decor", label: "Home Decor", value: "home-decor" },
    { key: "grocery", label: "Grocery", value: "grocery" },
    { key: "other", label: "Other", value: "other" },
];

const saleOptions = [
    { label: "Yes", value: true },
    { label: "No", value: false },
];

const INITIAL_PRODUCT = {
    name: "",
    price: "",
    productType: "",
    media: "",
    description: "",
    onSale: null,
    onOffer: "",
};

const AddProductsModal = () => {
    // addProduct Modal
    const [addProduct, setAddProduct] = useRecoilState(addProductState);
    const [product, setProduct] = React.useState(INITIAL_PRODUCT);
    const [mediaPreview, setMediaPreview] = React.useState("");
    const [success, setSuccess] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [disabled, setDisabled] = React.useState(true);
    const [error, setError] = React.useState();

    React.useEffect(() => {
        const isProduct = Object.values(product).every((el) => Boolean(el));
        isProduct ? setDisabled(false) : setDisabled(true);
    }, [product]);

    const toggleAddProduct = () => {
        setAddProduct(!addProduct);
        // console.log(modal)
    };

    const handleChanhe = (e) => {
        // console.log(d.value)
        const { name, value, files } = e.target;
        if (name === "media") {
            setProduct((prevState) => ({ ...prevState, media: files[0] }));
            setMediaPreview(window.URL.createObjectURL(files[0]));
        } else {
            setProduct((prevState) => ({ ...prevState, [name]: value }));
        }
        // console.log(product);
    };

    const handleSelectInput = (e) => {
        setProduct((prevState) => ({ ...prevState, productType: e.value }));
        // console.log(product)
    };

    const handleOnSaleInput = (e) => {
        setProduct((prevState) => ({ ...prevState, onSale: e.value }));
        // console.log(product)
    };

    const handleImageUpload = async () => {
        const data = new FormData();
        data.append("file", product.media);
        data.append("upload_preset", "vikings");
        data.append("cloud_name", "dev-empty");
        const response = await axios.post(process.env.CLOUDINARY_URL, data);
        const mediaUrl = response.data.url;
        return mediaUrl;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(product)
        try {
            setLoading(true);
            setError("");
            const imageUrl = await handleImageUpload();
            // console.log(imageUrl)
            const mediaUrl = imageUrl.replace(/^http:\/\//i, "https://");
            // console.log(mediaUrl)
            const url = `${baseUrl}/api/products/create`;
            const { name, price, description, productType, onSale, onOffer } =
                product;
            const payload = {
                name,
                price,
                description,
                productType,
                mediaUrl,
                onSale,
                onOffer,
            };
            const response = await axios.post(url, payload);
            // console.log(response)
            // console.log({response})
            toggleAddProduct();
            setProduct(INITIAL_PRODUCT);
        } catch (error) {
            catchErrors(error, setError);
        }
    };

    return (
        <div className={`admin-product-modal ${addProduct ? "active" : ""}`}>
            <div className="modal-innter-content">
                <button type="button" className="close">
                    <span onClick={toggleAddProduct}>
                        <i className="bx bx-x"></i>
                    </span>
                </button>

                <div className="modal-body">
                    <h3>Add Product</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Upload your product image here</label>
                            <div className="upload-img">
                                <span>
                                    <i className="bx bxs-image-add"></i>
                                    Click here or drop files to upload
                                </span>
                                <input
                                    type="file"
                                    className="form-control-file"
                                    name="media"
                                    accept="image/*"
                                    onChange={handleChanhe}
                                />
                            </div>
                        </div>

                        <img src={mediaPreview} />

                        <h4 className="title">
                            Add your product description and necessary
                            information from here
                        </h4>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Name"
                                value={product.name}
                                onChange={handleChanhe}
                            />
                        </div>

                        <div className="form-group">
                            <label>Description</label>
                            <textarea
                                className="form-control"
                                rows="3"
                                name="description"
                                placeholder="Description"
                                value={product.description}
                                onChange={handleChanhe}
                            />
                        </div>

                        <div className="form-group">
                            <label>Price</label>
                            <input
                                type="number"
                                className="form-control"
                                name="price"
                                placeholder="99.00"
                                value={product.price}
                                onChange={handleChanhe}
                            />
                        </div>

                        <div className="form-group">
                            <label>On Sale?</label>
                            <Select
                                onChange={handleOnSaleInput}
                                options={saleOptions}
                                id="onSale"
                                instanceId="onSale"
                                inputId="onSale"
                            />
                        </div>

                        <div className="form-group">
                            <label>Discount In Percent (1 or 1.5 ...)</label>
                            <input
                                type="text"
                                className="form-control"
                                name="onOffer"
                                placeholder="3.5"
                                value={product.onOffer}
                                onChange={handleChanhe}
                            />
                        </div>

                        <div className="form-group">
                            <label>Product Type</label>
                            <Select
                                onChange={handleSelectInput}
                                options={options}
                                id="productType"
                                instanceId="productType"
                                inputId="productType"
                            />
                        </div>

                        <div className="modal-btn">
                            <div
                                className="btn admin-optional-btn float-left"
                                onClick={toggleAddProduct}
                            >
                                Cancel
                            </div>
                            <button className="btn admin-btn float-right">
                                Create Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProductsModal;
