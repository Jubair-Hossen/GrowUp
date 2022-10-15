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
