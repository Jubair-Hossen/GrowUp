const express = require('express');
const { createProductControler, getAllProductControler, getProductByIdControler, updateProductControler } = require('../controlers/product.controler');
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();

router.route('/')
    .post(createProductControler)
    .get(verifyToken, getAllProductControler)

router.route('/:id')
    .get(getProductByIdControler)
    .patch(updateProductControler)

module.exports = router;