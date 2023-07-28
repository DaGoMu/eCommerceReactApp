import express from "express";
import { requireSignIn, isAdmin } from "./../middlewares/authMiddleware.js";
import {
  createCategoryController,
  updateCategoryController,
  categoryController,
  singleCategoryController,
  deleteCategoryController,
} from "./../controllers/categoryController.js";

const router = express.Router();

// routes
// Create new Category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

// Update Category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// Get All
router.get("/get-category", categoryController);

// Get One
router.get("/single-category/:slug", singleCategoryController);

//Delete
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
