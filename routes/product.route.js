const express = require('express');
const { createProductControler, getAllProductControler, getProductByIdControler, updateProductControler } = require('../controlers/product.controler');

const router = express.Router();

router.route('/')
    .post(createProductControler)
    .get(getAllProductControler)

router.route('/:id')
    .get(getProductByIdControler)
    .patch(updateProductControler)

module.exports = router;