import express from "express";
import { google, singin, singup } from "../controlers/auth.controler.js";

const router = express.Router();

router.post("/singup", singup);
router.post("/singin", singin);
router.post("/google", google);

export default router;
