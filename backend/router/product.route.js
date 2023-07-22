const express = require('express');
const productRouter = express.Router();
const productModel = require('../model/product.model');

productRouter.post('/user/products', async(req, res) => {
    try{
        const newProduct = await new productModel(req.body)
        newProduct.save()
        res.status(200).json(newProduct)
    }
    catch(err){
        res.json(err)
    }
}) 

productRouter.get('/user/getProducts', async(req,res) => {
    try{
        const allProducts = await productModel.find();
        res.status(200).json(allProducts)
    }
    catch(err){
        res.json(err)
    }
})

module.exports = productRouter;