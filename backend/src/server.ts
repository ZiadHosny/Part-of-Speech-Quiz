import express from 'express'
import cors from 'cors'
import { getFromEnv } from './utils/getFromEnv.js'
import wordsRouter from './routes/wordsRouter.js'
import rankRouter from './routes/rankRouter.js'
import helloRouter from './routes/helloRouter.js'

const { port } = getFromEnv()
const app = express()

app.use(express.json());
app.use(cors())

app.use('/', helloRouter)
app.use('/words', wordsRouter)
app.use('/rank', rankRouter)

app.listen(port, () => console.log(`Quiz app listening on port ${port}!`))