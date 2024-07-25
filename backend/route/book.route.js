import express from "express";
import getBook from "../controller/book.controller.js";
const router = express.Router();
router.route("/").get(getBook);
export default router;
