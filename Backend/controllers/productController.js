const Product = require("../models/Product");

//Get all products
exports.getAllProducts = async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    products
  });
};

//Get a product details
exports.getProductDetails = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product){
    return res.status(500).json({
      success: false,
      message: "Product not found"
    });
  }
  res.status(200).json({
    success: true,
    product
  });
};

//Create Products -- admin only
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product
  });
};

//Update products -- admin only
exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product){
    return res.status(500).json({
      success: false,
      message: "Product not found"
    });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, 
    runValidators : true, useFindAndModify : false });
  res.status(200).json({
    success: true,
    product
  });
}

//Delete products -- admin only
exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product){
    return res.status(500).json({
      success: false,
      message: "Product not found"
    });
  }
  await Product.remove();
  res.status(200).json({
    success: true,
    product
  });
}


