
import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import cookieParser from 'cookie-parser'

import authRouter from './src/routes/auth.routes.js'
import { errorMiddleware } from './src/middleware/error.middleware.js'



const app = express()
const PORT = 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname  = path.dirname(__filename)

app.use(express.json())
app.use(express.static(path.join(__dirname, '../client')))
app.use(cookieParser())

app.use('/auth', authRouter)

app.use('/auth', errorMiddleware)

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})