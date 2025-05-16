import express from "express";
import { getAllPropertiesController, registerController } from "../Controllers/authController.js";

const router = express.Router();

// POST: Register a new property
router.post("/uploaddata", registerController);

// GET: Fetch all properties

router.get("/all", getAllPropertiesController);
//I have just psuh code ro git

export default router;
