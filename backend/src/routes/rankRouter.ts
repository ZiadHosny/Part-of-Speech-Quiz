import express from "express"
import { rankController } from "../controllers/rankController.ts"

const router = express.Router()

router.put('/', rankController)

export default router