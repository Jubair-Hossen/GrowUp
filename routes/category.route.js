const express = require('express');
const { createCategoryControler, getCategoryByIdControler, getAllCategoryControler, updateCategoryControler } = require('../controlers/category.controler');
const verifyJwt = require('../middlewares/verifyJwt');
const router = express.Router();

router.route('/')
    .post(createCategoryControler)
    .get(getAllCategoryControler)

router.route('/:id')
    .get(verifyJwt, getCategoryByIdControler)
    .patch(updateCategoryControler)

module.exports = router;