import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// routing

// Register || Method post
router.post("/register", registerController);

//ROUTING || POST
router.post("/login", loginController);

// Testing routes
router.get("/test", requireSignIn, isAdmin, testController);

//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// Forgot Pass
router.post("/forgot-password", forgotPasswordController);

// update Profile
router.put("/profile", requireSignIn, updateProfileController);

// Orders
router.get("/orders", requireSignIn, getOrdersController);

// All Orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// Order Status
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
