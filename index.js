const express = require("express");

const app = express();

app.get('/hello/:username',(req, res)=>{
    console.log(req.query)
    console.log(req.query.age)

    console.log(req.query.age ? `la edad es: ${req.query.age}`: 'No hay edad')
    res.send(`Hello ${req.params.username.toUpperCase()}`)
})

app.get('/search',(req, res) => {
    const {color, points} = req.query
    if (color === 'blue' && points>=10){
        res.send('el color es azul')
    }else{
        res.send('No hay nada')
    }
})


app.listen(3000);
console.log(`server on port ${3000}`);
