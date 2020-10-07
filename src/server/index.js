import express from 'express'
import compression from 'compression'
import path from 'path'
import { fileURLToPath } from 'url'
import morgan from 'morgan'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const __projRoot = path.join(__dirname + '/../..')
console.log('__projRoot => ', __projRoot)

const app = express()
app.use(morgan('combined'))
app.use(compression())
app.use(express.static(path.join(__projRoot, 'dist')))

app.get('/', (req, res) => {
    res.sendFile(path.join(`${__projRoot}/dist/index.html`))
})

app.listen(8080)
