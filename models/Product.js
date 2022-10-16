const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;
const valid = require("validator");

// schema design
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name for this product."],
        trim: true,
        unique: [true, "Name must be unique"],
        lowercase: true,
        minLength: [3, "Name must be at least 3 characters."],
        maxLenght: [100, "Name is too large"],
    },
    description: {
        type: String,
        minLength: [20, "description must be at least 20 characters."],
        required: true
    },

    unit: {
        type: String,
        required: true,
        enum: {
            values: ["kg", "litre", "pcs", "bag"],
            message: "unit value can't be {VALUE}, must be kg/litre/pcs/bag"
        }
    },

    photoUrls: [{
        type: String,
        required: true,
        validate: [valid.isURL, "wrong url"]
    }],

    category: {
        name: {
            type: String,
            required: true,
        },
        id: {
            type: ObjectId,
            ref: "Category",
            required: true,
        }
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: ["in-stock", "out-of-stock"],
            massege: "status can't be {VALUE} must be in-stock/out-of-stock"
        }
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true,
    }
},
    {
        timestamps: true,
    })


productSchema.pre('save', function (next) {
    if (this.quantity == 0) {
        this.status = 'out-of-stock'
    }

    next()
})


const Product = mongoose.model('Product', productSchema)

module.exports = Product;