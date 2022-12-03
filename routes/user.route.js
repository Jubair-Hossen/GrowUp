const express = require('express');
const { CreateUserControler, getAllUserControler, getUserByIdControler, updateUserControler } = require('../controlers/user.controler');
const verifyToken = require('../middlewares/verifyToken');
const router = express.Router();

router.route('/')
    .post(CreateUserControler)
    .get(getAllUserControler)

router.route('/:email')
    .get(getUserByIdControler)
    .put(verifyToken, updateUserControler)

module.exports = router;