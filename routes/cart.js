const express = require('express');
const {
    createCart,
    updateCart
} = require('../controller/cart');

const router = express.Router();

router.route('/')
    .post(protect, authorize('user', 'store', 'admin'),createCart);

    router.route('/:id')
    .put(protect, authorize('user', 'store', 'admin'),updateCart);
