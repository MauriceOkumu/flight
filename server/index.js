import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import DB  from '../backend/database/index.js'

dotenv.config()

const port  = 4000
const server = express()

const router = express.Router()

server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
server.use(cors());
server.use((req, res, next) => {
    next()
})


const getFlights = () => {
    return new Promise(function(resolve, reject) {
    DB().query('SELECT * FROM flighter', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }


router.get('/', async (req, res) => {
  await getFlights().then((resl) => {
    console.log('Rsults', resl)
    res.send(resl)
   })
})

server.use('/', router)
server.listen(port, () => {
    console.log('Server is listening on port ', port)
})