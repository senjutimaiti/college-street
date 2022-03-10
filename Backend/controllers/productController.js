const Product = require("../models/Product");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//Get all products
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
  
  const products = await Product.find();

  res.status(200).json({
    success: true,
    products
  });

});

//Get a product details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product
  });

});

//Create Products -- admin only
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  
  const product = await Product.create(req.body);
  
  res.status(201).json({
    success: true,
    product
  });

});

//Update products -- admin only
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, 
    runValidators : true, useFindAndModify : false });
  
  res.status(200).json({
    success: true,
    product
  });

});

//Delete products -- admin only
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  
  const product = await Product.findById(req.params.id);
  
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  await Product.remove();
  res.status(200).json({
    success: true,
    product
  });
  
});


