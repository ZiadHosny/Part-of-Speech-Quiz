import express from "express"
import { wordsController } from "../controllers/wordsController.ts"

const router = express.Router()

router.get('/', wordsController)

export default router