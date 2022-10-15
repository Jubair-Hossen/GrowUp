const mongoose = require("mongoose");
const { Schema } = mongoose;
const User = require("./User");

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        minLength: [4, "invalid name"],
        maxLength: [50, 'invalid name'],
        trim: true,
        lowercase: true,
        required: true
    },
    photoUrl: {
        type: String,
    },
    products: [{ type: Schema.Types.ObjectId, ref: 'User' }]
},
    {
        timestamps: true
    })

const Category = mongoose.model("Categories", categorySchema);
module.exports = Category;