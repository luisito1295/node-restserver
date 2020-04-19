require('./config/config');

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

//parse application/json
app.use(bodyParser.json())

//Rutas
app.use(require('./routes/usuario'));

//Conexion a la base de datos
mongoose.connect('mongodb://localhost:27017/cafe', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true }, (err, res) => {
    
    if(err){
        throw err;
    }else{
        console.log('Base de datos conectado');
    }

});


app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto 3000');
});

