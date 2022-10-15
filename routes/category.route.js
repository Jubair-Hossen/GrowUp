const express = require('express');
const { createCategoryControler, getCategoryByIdControler } = require('../controlers/category.controler');
const router = express.Router();

router.route('/')
    .post(createCategoryControler)
// .get(get)

router.route('/:id')
    .get(getCategoryByIdControler)
//     .patch(updateUserControler)

module.exports = router;