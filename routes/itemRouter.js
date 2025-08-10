import { Router } from "express";
import validateItem from "../middleware/itemMiddleWare.js";
 import { createItem, getItems } from "../controllers/itemController.js";

const router = Router()

router.route("/createItem").post(validateItem, createItem)

router.route("/getItems").get(getItems)

export default router


