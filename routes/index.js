import express from "express";
import bookRoutes from "./books.js";
import authRoutes from "./auth.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/books", bookRoutes);

export default router;
