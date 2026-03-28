
import express from 'node:express'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import authRouter from './src/routes/auth.routes'

const app  = express()
const PORT = 3000

const __filename = pathToFileURL(import.meta.url)
const __dirname  = path.dirname(__filename)

app.use(express.json())
app.use(express.static(path.join(__dirname)))

app.use('/auth', authRouter )


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})