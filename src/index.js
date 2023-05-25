const express = require("express");
const morgan = require('morgan')
const path = require('path')

const app = express();
const HomeRoutes = require('./routes/home')
const UserRoutes = require('./routes/users')

app.use(morgan('tiny'))

app.use(HomeRoutes)
app.use(UserRoutes)

//app.use(express.static('./static'))
app.use('/public',express.static(path.join(__dirname,'static'))) //para acceder a los archivos de static cuando lo metemos en una carpeta
//esto de abajo lo probé yo
app.use((req, res) => {
    res.send(`No existe tu ruta /${req.url} `)
})




app.listen(3000);
console.log(`server on port ${3000}`);
