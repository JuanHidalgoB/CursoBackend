const express = require("express");

const app = express();


app.use(express.text()) //para que el servidor pueda leer text
app.use(express.json())
app.use(express.urlencoded({extended: false}))//para leer formularios simples, no tiene que interoretar nada complejo

app.post("/user", (req, res) => {
  console.log(req.body);

  res.send("Nuevo Usuario Creado");
});
app.listen(3000);
console.log(`server on port ${3000}`);
