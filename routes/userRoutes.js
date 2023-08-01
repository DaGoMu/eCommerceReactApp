import express from "express";
import { requireSignIn, isAdmin } from "./../middlewares/authMiddleware.js";
import { getUsersController } from "./../controllers/userController.js";

const router = express.Router();

// Get All Users
// router.get("/get-users", requireSignIn, isAdmin, getUserController);
router.get("/get-users", getUsersController);

export default router;
