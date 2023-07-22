const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    image : {type : String, required : true},
    name : {type : String, required : true},
    price : {type : String, required : true},
    category : {type : String, required : true}
})

const product = mongoose.model("products", productSchema)

module.exports = product;