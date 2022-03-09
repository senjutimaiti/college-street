const { Router } = require("express");
const {
  getAllProducts,
  createProduct,
} = require("../controllers/productController");
const router = Router();

router.get("/products", getAllProducts);
router.post("/product/new", createProduct);

module.exports = router;
