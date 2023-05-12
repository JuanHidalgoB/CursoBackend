const express = require("express");

const app = express();

app.get('/hello/:username',(req, res)=>{
    console.log(typeof req.params.username)
    res.send(`Hello ${req.params.username.toUpperCase()}`)
})

app.get('/add/:x/:y', (req, res)=>{

    //se puede hacer lo siguiente para sacar los parametros más fácil
    //const {x,y} = req.params 

    const suma = parseInt(req.params.x) + parseInt(req.params.y)
    res.send(`${req.params.x} + ${req.params.y} = ${suma}`)

})

app.get('/:user/photo', (req, res) => {
    const {user} = req.params
    if (user === 'juan'){
        return res.sendFile('./flyer.jpeg', {
            root: __dirname
        })
    }
    res.send('Usuario sin acceso')
    
})
app.listen(3000);
console.log(`server on port ${3000}`);
