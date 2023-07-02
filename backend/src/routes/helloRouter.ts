import express from "express"

const router = express.Router()

router.get('/', (req, res) => {

    res.send('Hello From Quiz App use /Words To Get Word List')
})



export default router