const mongoose = require("mongoose")

const laptopschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        default: ""
    }
})

const laptops = mongoose.model("laptops", laptopschema)
module.exports = laptops