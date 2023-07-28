import express from "express";
import { requireSignIn, isAdmin } from "./../middlewares/authMiddleware.js";
import {
  createProductController,
  updateProductController,
  getProductController,
  singleProductController,
  productPhotoController,
  deleteProductController,
  productFiltersController,
  productCountController,
  productListController,
  searchProductController,
  relatedProductController,
  productCategoryController,
  braintreeTokenController,
  braintreePaymentController,
} from "./../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();

// routes
// Create new Product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// Update Product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// Get All
router.get("/get-product", getProductController);

// Get One
router.get("/get-product/:slug", singleProductController);

// Get Photo
router.get("/product-photo/:pid", productPhotoController);

//Delete
router.delete(
  "/delete-product/:pid",
  requireSignIn,
  isAdmin,
  deleteProductController
);

// Filter products
router.post("/product-filters", productFiltersController);

// Product Count
router.get("/product-count", productCountController);

// Producto por pagina
router.get("/product-list/:page", productListController);

// Search Product
router.get("/search/:keyword", searchProductController);

// Similar Products
router.get("/related-product/:pid/:cid", relatedProductController);

// Category Products
router.get("/product-category/:slug", productCategoryController);

// PAYMENT
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, braintreePaymentController);

export default router;
