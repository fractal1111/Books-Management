
const mongoose = require("mongoose")

const userModel = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        enum: ["Mr", "Mrs", "Miss"],
        trim:true
    },
    name: {
        type: String,
        required: true,
        trim:true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim:true
    },
    email: {
        type: String,
        required: true,
        lowercase:true,
        validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
        unique: true,
        trim:true

    },
    password: {
        type: String,
        required: true,
        minlength: [5, "Input more than 5 charachter"],
        maxlength: [15, "Enter less than 15 characters"],
        trim:true
    },
    address: {
        street: {
            type: String,
            trim:true
        },
        city: {
            type: String,
            trim:true
        },
        pincode: {
            type: String,
            trim:true
   
        }
   
    }


},{timestamps:true})
module.exports = mongoose.model("usermbook", userModel)