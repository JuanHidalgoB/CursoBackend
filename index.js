/*
//Con http

const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const read = fs.createReadStream('./static/index.html')
    read.pipe(res)
})

server.listen(3000)
console.log(`server on port ${3000}`)
*/
const express = require('express')

const app = express()

app.get('/', (req ,res) => {
    res.sendFile('./static/index.html', {
        root: __dirname
    })
})

app.get('/about', (req ,res) => {
    res.send('About')
})

app.get('/profile', (req ,res) => {
    res.send('Profile')
})

app.use((req, res) => {
    res.status(404).send('No se encuentra tu página')
})

app.listen(3000)
console.log(`server on port ${3000}`)