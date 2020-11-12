import express from 'express'
import compression from 'compression'
import path from 'path'
import { fileURLToPath } from 'url'
import morgan from 'morgan'
import ws from 'ws'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const __projRoot = path.join(__dirname + '/../..')
const logger = morgan('combined')
const app = express()
app.use(logger)
app.use(compression())
app.use(express.static(path.join(__projRoot, 'dist')))

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__projRoot}/dist/index.html`))
})

app.get('/foo', async (req, res) => {
    const service = () => new Promise(resolve => {
        setTimeout(() => resolve({
          action: "UPDATE_FOO_SUCCESS",
          payload: {
            val: "FOO"
          }
        }), 1000)
    })
    // TODO instead of sending a JSON response, emit a websocket message w/ the action
    const result = await service()
    res.json(result)
})

const wsServer = new ws.Server({ noServer: true })
wsServer.on('connection', socket => {
  socket.on('message', message => console.log(message))
})

const server = app.listen(8080)
server.on(`upgrade`, (req, socket, header) => {
  wsServer.handleUpgrade(
    req,
    socket,
    header,
    sock => {
      wsServer.emit('connection', sock, req)
    }
  )
})

wsServer.on('connection', ws => {
  ws.on('message', message => {
    console.log('received: %s', message)
  })

  ws.send('something')
})
