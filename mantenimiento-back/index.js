const express = require('express');

const cors = require('cors');

require('dotenv').config();


const app = express();


// CORS
app.use( cors() );

// enlazar carpeta public con index.html
app.use( express.static( 'public' ) );


// lectura y parse del body de la request
app.use( express.json() );

//Rutas
app.use('/mantenimiento/ver',require('./routes/ver'));
app.use('/mantenimiento/agregar',require('./routes/agregar'));
app.use('/mantenimiento/editar',require('./routes/editar'));
app.use('/mantenimiento/cancelar',require('./routes/cancelar'));

app.listen(process.env.PORT, ()=>{
    console.log( `Server en ${process.env.PORT}`);
});