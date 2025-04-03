const mongoose = require('mongoose');
const productoSchema = mongoose.Schema({

    codigo_prod: {
        type: String,
    },
    nomb_prod: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    existencias: {
        type: Number,
        required: true
    },
})

const Product = mongoose.model('Product', productoSchema);
module.exports = Product;