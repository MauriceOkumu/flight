dotenv.config()
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import path from 'path'
import helmet from 'helmet'
import compression from 'compression'
import rateLimit from 'express-rate-limit'
import {check, validationResult} from 'express-validator'


import DB  from '../backend/database/index.js'
import createTables from '../backend/controllers/createTables.js'


const port  = process.env.PORT || 4000
const server = express()

const isProduction = process.env.NODE_ENV === 'production'

//Added protection in browsers
const origin = {
  origin: isProduction ? 'https://maurice-flights.herokuapp.com/' : '*'
}

//Limit api calls to help protect against brute force /DDOS attacks
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,// 1 minute
  max: 5 // 5 requests
})

const router = express.Router()
server.use(helmet())
server.use(cors(origin))
server.use(compression())
server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())
server.use(limiter)

const __dirname = path.resolve('')

server.use(express.static(path.join(__dirname,'../build')))



if(isProduction) {
    
    server.get('*', (req, res) => {
        res.sendfile(path.join(__dirname +'../build/index.html'))
    })
}


server.use('/', router)

router.get('/', async (req, res) => {
  DB().query (createTables()).then(res => {
    console.log(res)
    DB().end()
  })

    await DB()
    .connect(err => {
      if (err) {
        console.error('connection error', err.stack)
        throw err
      } else {
        console.log('connected to the database flighter')
        res.send('[ no data yet ]')
      }
    
    })
    //  console.log('Response =>', res.rows[0])
    // res.send('[ no data yet ]')

})

//Example of form validation
server.post('/addflight', [
  check('airport')
      .not()
      .isEmpty()
      .isLength({ min: 5, max: 255 })
      .trim(),
    check('aircraft')
      .not()
      .isEmpty()
      .isLength({ min: 5, max: 255 })
      .trim(),
],(req, res) => {

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  } else {
    //DB stuff......
  }

})

server.listen(port, () => {
    console.log('Server is listening on port ', port)
})
