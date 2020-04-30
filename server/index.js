import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

import DB  from '../backend/database/index.js'

dotenv.config()

const port  = 4000
const server = express()

const router = express.Router()
server.use(cors())
server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())


server.use('/', router)
router.get('/', async (req, res) => {

    await DB()
    .connect(err => {
      if (err) {
        console.error('connection error', err.stack)
      } else {
        console.log('connected')
      }
    })
    // console.log('Response =>', res.rows[0])
    res.send('[ no data yet ]')

})

server.listen(port, () => {
    console.log('Server is listening on port ', port)
})
