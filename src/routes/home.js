const express = require('express')

const router = express.Router()

router.get('/dashboard', (req, res) => {
    res.sendFile('./static/index.html',{
        root: __dirname
    })
})

router.get('/about', (req, res) => {
    res.send('About pages')
})

module.exports = router