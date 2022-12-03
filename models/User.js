const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        minLength: [4, "invalid name"],
        maxLength: [50, 'invalid name'],
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    businessName: {
        type: String,

    },
    address: {
        type: String
    },
    phone: {
        type: String,
        minLength: [11, 'invalid phone number'],
        maxLength: [11, 'invalid phone number']
    },
    photoUrl: {
        type: String,
    },
    role: {
        type: String,
        enum: {
            values: ['admin', 'customer', 'manager'],
            message: '{VALUE} is not supported'
        },
        default: "customer"
    }
},
    {
        timestamps: true
    })

const User = mongoose.model("User", userSchema);
module.exports = User;