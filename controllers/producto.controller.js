const Product = require('../models/producto.model');

//recuperacion de productos
const recProducts = async(req, res) => {
    try {
        const Products = await Product.find({});
        res.status(200).json(Products);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrio un error ' + error.message });
    }
}

// Función para recuperar un producto usando su identificador
// const getItemsById = async(req, res) => {
//     try { 
//         const { id } = req.params;
//         const _Item = await Item.find({'_id': id});
//         res.status(200).json(_Item);
//     } catch (error) {
//         res.status(500).json({ message: 'Ocurrio un error ' + error.message });
//     }
// }

// // Función para recuperar un _Item usando su nickname y contraseña
// const getItemsByType = async(req, res) => {
//     try {
//         const type = req.body.type;
//         const _Item = await Item.find({'type': type});
//         res.status(200).json(_Item);
//     } catch (error) {
//         res.status(500).json({ message: 'Ocurrio un error ' + error.message });
//     }
// }

// Función crear un produvto
const crearProduct = async(req, res) => {
    try {
        const _Prod = await Product.create( req.body );
        res.status(200).json(_Prod);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrio un error ' + error.message });
    }
}

// Función para actualizar info de producto
const updateProductID = async(req, res) => {
    try {
        const { id } = req.params;
        const _Prod = await Item.findByIdAndUpdate(id, req.body);
        if (!_Prod)
            return res.status(400).json({ message: 'No existe tal producto registrado' });
        const _prodctualizado = await Item.find({ '_id':id });
        res.status(200).json(_prodctualizado);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrio un error ' + error.message });
    }
}

// eliminar producto con el id
const deleteprodID = async(req, res) => {
    try {
        const { id } = req.params;
        const _Prod = await Product.find({'_id': id});
        if (!_Prod)
            return res.status(400).json({ message: 'No se eliminó nada' });
        const Eliminado = await Product.deleteOne({ '_id':id });
        res.status(200).json({ message: 'Se eliminó correctamente el producto seleccionado' });
    } catch (error) {
        res.status(500).json({ message: 'Ocurrio un error ' + error.message });
    }
}

module.exports = {
    recProducts,
    // getItemsById,
    crearProduct,
    updateProductID,
    deleteprodID,
    // getItemsByType
}