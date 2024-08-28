import express from "express";
import { singup } from "../controlers/auth.controler.js";

const router = express.Router();

router.post("/singup", singup);

export default router;
