const express= require('express');
const cors= require('cors');
const { dbConnection } = require('../Auth-server-back/db/config');
require('dotenv').config();

//TODO Crear servidor/app de express
const app=express();

//DB connection
dbConnection();

//Directorio público
app.use(express.static('public'));

//CORS
app.use(cors());

//Lectura y parseo del body
app.use(express.json());

//Rutas:
app.use('/api/auth', require('../Auth-server-back/routes/auth') ); //Endpoint padre

app.listen(process.env.PORT, () =>{
    console.log(`Servidor corriendo en el puerto: ${ process.env.PORT }`)
});