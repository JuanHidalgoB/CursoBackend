const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log(`Route: ${req.url} Method: ${req.method}`)

    next()
})

app.get('/profile', (req, res) => {
    res.send('Profile Page')
})

//esto de abajo lo probé yo
app.use((req, res) => {

    res.send(`No existe tu ruta /${req.url} `)
})
app.listen(3000);
console.log(`server on port ${3000}`);
