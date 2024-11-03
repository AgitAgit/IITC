import Product from '../models/productModel.js';

export const getAllProducts = async function(req, res, next){
    try{
        const products = await Product.find();
        res.json(products);
        next();
    } catch(error){
        next(error);
    }
}

//need to add a middleware that checks if the product already exists...
export const addProduct = async function(req, res, next){
    try{
        const product = new Product(req.body);
        const result = await product.save();
        res.json({message:"product added", result});
        next();
    } catch(error){
        next(error);
    }
}