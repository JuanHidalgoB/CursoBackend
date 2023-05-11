const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/miarchivo", (req, res) => {
  res.sendFile("./flyer.jpeg", {
    root: __dirname,
  });
});

app.get("/user", (req, res) => {
  res.json({ nombre: "Juan", apellido: "Hidalgo", edad: 20, id: 2205622 });
});

app.get("/isAlive", (req, res) => {
  res.sendStatus(204);
});

app.listen(3000);
console.log(`server on port ${3000}`);
