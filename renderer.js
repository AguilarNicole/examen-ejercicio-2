// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.


const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password:'',
    database: 'notas'

});  

conexion.connect(function(error){
    if (error){
        console.log("La conexion no puede ser establecida");
        return;
    }
    console.log("Conexion Exitosa");
})

