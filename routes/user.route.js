const express = require('express');
const { CreateUserControler, getAllUserControler, getUserByIdControler, updateUserControler } = require('../controlers/user.controler');
const router = express.Router();

router.route('/')
    .post(CreateUserControler)
    .get(getAllUserControler)

router.route('/:id')
    .get(getUserByIdControler)
    .patch(updateUserControler)

module.exports = router;