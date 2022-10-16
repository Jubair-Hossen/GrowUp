const Category = require("../models/Category");
const Product = require("../models/Product")

exports.createProductControler = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        const { _id: productId, category } = product;
        const result = await Category.updateOne({ _id: category.id },
            { $push: { products: productId } }
        )
        res.status(200).json({
            success: true,
            data: product
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

exports.getAllProductControler = async (req, res) => {
    try {
        const result = await Product.find({});
        res.status(200).json({
            success: true,
            data: result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

exports.getProductByIdControler = async (req, res) => {
    try {
        const result = await Product.findById(req.params.id);
        res.status(200).json({
            success: true,
            data: result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.massege
        })
    }
}

exports.updateProductControler = async (req, res) => {
    try {
        const filter = { _id: req.params.id };
        const doc = req.body;
        const result = await Product.updateOne(filter, doc, { runValidators: true });
        res.status(200).json({
            success: true,
            data: result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.massege
        })
    }
}