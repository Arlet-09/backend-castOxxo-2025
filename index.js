const express = require('express');
const mongoose = require('mongoose');
//CORS
const cors = require('cors');

//Ruta del usuario.
const userRoute = require('./routes/usuario.route');
//Ruta de productos
const prodRoute = require('./routes/producto.route');
//Ruta del carrito de compras
const cartRoute = require('./routes/carrito.route');

const app = express();
// Parser del JSOn express.
app.use(express.json());
// Agregando el middleware de CORS para consumo de APIs en el mismo origen
app.use(cors());

// Ruta por default.
app.get('/', (req, res) => {
    res.send('Bienvenido al servidor de APIs version 1.0.0');
})

// Tareas CRUD y sus métodos
// C - Create -> post
// R - Recuperación -> get
// U - update -> put
// D - delete -> delete

// Endpoint para colec de usuarios.
app.use('/api/users', userRoute);
// Endpoint para colec de productos
app.use('/api/products', prodRoute);
// Endpoints para colec de carrito de compras
app.use('/api/cart', cartRoute);

// Realizar petición de conexión a mongodb
// mongoose.connect('mongodb://localhost:27017/MyDatabase')
mongoose.connect('mongodb+srv://arly:lawliet79@servecluster.vjjmn8c.mongodb.net/CastOxxo')
.then( () => {
    console.log('Se estableció la conexión a base de datos exitosamente');
    app.listen( 3000, () => {
        console.log('Servidor trabajando en el puerto 3000');
    });
})
.catch( () => console.log('Ocurrió un error en la conexión a la base de datos') );