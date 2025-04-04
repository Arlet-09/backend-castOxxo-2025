const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Cargar variables de entorno

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Importar rutas
const userRoute = require('./routes/usuario.route');
const prodRoute = require('./routes/producto.route');
const cartRoute = require('./routes/carrito.route');

// Rutas
app.get('/', (req, res) => {
    res.send('Bienvenido al servidor de APIs versión 1.0.0');
});

app.use('/api/users', userRoute);
app.use('/api/products', prodRoute);
app.use('/api/cart', cartRoute);

// Conexión a MongoDB Atlas
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conexión a MongoDB Atlas establecida'))
.catch(err => console.error('Error al conectar a MongoDB:', err.message));

// Puerto del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor trabajando en el puerto ${PORT}`);
});