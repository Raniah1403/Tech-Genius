import Product from "../models/product.js";

export const getAllProduct = async () => {
    return await Product.find();
};