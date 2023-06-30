import express from "express"
import { rankController } from "../controllers/rankController.js"

const router = express.Router()

router.put('/', rankController)

export default router