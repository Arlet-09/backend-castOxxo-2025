const express = require('express');
const router = express.Router();
const {
    recProducts,
    // getItemsById,
    crearProduct,
    updateProductID,
    deleteprodID,
    // getItemsByType
} = require('../controllers/producto.controller');

// Endpoint para la recuperación de la colección de items
router.get('/allProducts', recProducts);
// Endopint para la recuperación de un item
// router.get('/byId/:id', getItemsById);
// Endpoint para la recuperación de un item usando su nickname
// router.get('/byType/:type', getItemsByType);
// Endpoint para la creación de un item
router.post('/addProduct', crearProduct);
// Endpoint para la actualización de un item
router.put('/update/:id', updateProductID);
// Endpoint para la eliminación de un item
router.delete('/delete/:id', deleteprodID);

module.exports = router;