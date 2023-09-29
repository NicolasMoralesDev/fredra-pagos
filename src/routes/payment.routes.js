import { Router } from "express";
import { createOrder } from "../controllers/payment.controller.js";




const router = Router();
router.get("/", (req, res) => res.send("server working"))
router.post("/create-order", createOrder)
router.get("/success", (req, res) => res.send("creating order"))
router.get("/webhook", (req, res) => res.send("webhook"))


export default router