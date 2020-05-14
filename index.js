const express = require('express');

// creamos la app
const app = express();


// ruta para el home

app.use('/',(req,res) =>{
    res.send("hola");    
}

)

//puerto de escucha
app.listen(3000);
