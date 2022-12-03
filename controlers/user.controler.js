const User = require("../models/User")

exports.CreateUserControler = async (req, res) => {
    try {
        const result = await User.create(req.body);
        res.status(200).json({
            success: true,
            result
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
    // try {
    // const filter = { email: req.params.email };
    // const doc = req.body;
    // doc.email = req.decoded.email;
    // doc.role = "customer";
    // if (req.decoded.email === req.params.email) {
    //     const result = await User.updateOne(filter, doc, { runValidators: true, upsert: true });
    //     res.status(200).json({
    //         success: true,
    //         data: result
    //     })
    // } else {
    //     res.status(401).json({
    //         success: false,
    //         error: "unauthorized access"
    //     })
    // }
    // } catch (error) {
    //     res.status(400).json({
    //         success: false,
    //         error: error.message
    //     })
    // }
}