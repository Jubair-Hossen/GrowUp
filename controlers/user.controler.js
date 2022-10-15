const User = require("../models/User")

exports.CreateUserControler = async (req, res) => {
    try {
        const result = await User.create(req.body);
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

exports.getAllUserControler = async (req, res) => {
    try {
        const result = await User.find({});
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

exports.getUserByIdControler = async (req, res) => {
    try {
        const result = await User.findById(req.params.id);
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

exports.updateUserControler = async (req, res) => {
    try {
        const filter = { _id: req.params.id };
        const doc = req.body;
        const result = await User.updateOne(filter, doc, { runValidators: true });
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