import express from 'express'
const port  = 4000
const server = express()

server.get('/', (req, res) => {
    res.send('Hello world')
})
server.listen(port, () => {
    console.log('Server is listening on port ', port)
})