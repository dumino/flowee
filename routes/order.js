const express = require('express');
const {
    requestOrder,
    acceptOrder
} = require('../controller/cart');

const router = express.Router();

router.route('/store/:storeId/cart/:cartId')
    .post(protect, authorize('user', 'admin'),requestOrder);

router.route('/:id')
    .put(protect, authorize('user', 'admin'),acceptOrder);
