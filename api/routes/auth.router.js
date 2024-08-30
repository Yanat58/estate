import express from "express";
import { singin, singup } from "../controlers/auth.controler.js";

const router = express.Router();

router.post("/singup", singup);
router.post("/singin", singin);

export default router;
