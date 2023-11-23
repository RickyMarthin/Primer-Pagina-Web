const express = require('express');
const mysql = require('mysql');

const app = express();

let conexion = mysql.createConnection({
    host: "127.0.0.1",
    database: "paginaWeb",
    user: "root",
    password: ""
});

app.set("view engine", "ejs");

// Metodo para que express ahora use los codigos que vienen de una pagina, de los formularios por ejemplo
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/", function(req, res){
    res.render("registro");
});

app.post("/validar", function(req, res){
    const datos = req.body;

    let nombres = datos.nombres;
    let apellidos = datos.apellidos;
    let correo = datos.correo;
    let edad = parseInt(datos.edad);
    let telefono = datos.telefono;

    console.log(typeof(edad))

    let registrar = `INSERT INTO paginaWeb.usuarios (nombres, apellidos, correo, edad, telefono) VALUES ('${nombres}', '${apellidos}', '${correo}', ${edad}, '${telefono}')`;

    conexion.query(registrar, function(error){
        if (error){
            throw error;
        }else{
            console.log("Datos almacenados correctamente")
        }
    });
});

app.listen(3000, function(){
    console.log("Servidor creado");
})

