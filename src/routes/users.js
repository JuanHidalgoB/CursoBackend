const express = require('express')
//const {Router} = require('express')
//const router = Router()
const router = express.Router()

router.get('/profile', (req, res) => {
    res.send('Profile Page')
})

router.get('/about', (req, res) => {
    res.send('About Page')
})

module.exports = router