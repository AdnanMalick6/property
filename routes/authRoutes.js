import express from "express";
import { getAllPropertiesController, registerController } from "../Controllers/authController.js";

const router = express.Router();

// POST: Register a new property
router.post("/register", registerController);

// GET: Fetch all properties
router.get("/all", getAllPropertiesController);

export default router;
