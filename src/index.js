const express = require("express");
const morgan = require('morgan')
const path = require('path')

const app = express();

app.use(morgan('tiny'))



app.get('/profile', (req, res) => {
    res.send('Profile Page')
})

app.get('/note.txt', (req,res) => { //para acceder a esta ruta y no se confunda con el archivo de static
    res.send('esto no es un archivo')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

//a este middleware le puedo poner la ruta de /dashboard para que solo se aplique cuando quiera ir a esa ruta (creo que es la manera correcta)
/*app.use((req, res, next) => {
    if (req.query.login === 'juan@uao.edu.co'){
        next()
    }else{
        res.send('No autorizado')
    }
})*/

app.get('/dashboard', (req, res) => {
    res.sendFile('./static/index.html',{
        root: __dirname
    })
})

//app.use(express.static('./static'))
app.use('/public',express.static(path.join(__dirname,'static'))) //para acceder a los archivos de static cuando lo metemos en una carpeta
//esto de abajo lo probé yo
app.use((req, res) => {
    res.send(`No existe tu ruta /${req.url} `)
})




app.listen(3000);
console.log(`server on port ${3000}`);
