const { Router } = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");
const router = Router();

router.get("/products", getAllProducts);
router.post("/product/new", createProduct);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);
router.get("/product/:id", getProductDetails);

module.exports = router;
