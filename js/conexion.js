const express = require('express');
const mysql = require("mysql");

const app = express();
const port = 3306;

app.set("view engine", "ejs");

const conexion = mysql.createConnection({
    host: "127.0.0.1",
    database: "paginaWeb",
    user: "root",
    password: ""
});

conexion.connect(function(err){
    if (err){
        throw err;
    }else{
        console.log("Conexion exitosa");
    }
});

app.get('/usuarios', (req, res) => {
    res.render("registro");
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://127.0.0.1:${port}`)
});