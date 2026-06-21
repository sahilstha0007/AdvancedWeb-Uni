import express from "express";
import { getLaptops, addLaptop } from "../controllers/laptop.controller.js";

const router = express.Router();

router.get("/", getLaptops);
router.post("/", addLaptop);

export default router;
