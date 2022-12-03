const express = require('express');
const { createCategoryControler, getCategoryByIdControler, getAllCategoryControler, updateCategoryControler } = require('../controlers/category.controler');
const router = express.Router();

router.route('/')
    .post(createCategoryControler)
    .get(getAllCategoryControler)

router.route('/:id')
    .get(getCategoryByIdControler)
    .patch(updateCategoryControler)

module.exports = router;