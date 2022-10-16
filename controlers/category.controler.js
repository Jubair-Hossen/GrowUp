const Category = require("../models/Category");

exports.createCategoryControler = async (req, res) => {
    try {
        const result = await Category.create(req.body);
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

exports.getAllCategoryControler = async (req, res) => {
    try {
        const result = await Category.find({});
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

exports.updateCategoryControler = async (req, res) => {
    try {
        const filter = { _id: req.params.id };
        const doc = req.body;
        const result = await Category.updateOne(filter, doc, { runValidators: true });
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

exports.getCategoryByIdControler = async (req, res) => {
    try {
        const result = await Category.findOne({ _id: req.params.id }).populate("products");
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
