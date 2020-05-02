const express = require('express');
const {
    getFlowers,
    addFlowers,
    getFlower
} = require('../controller/flower');

const router = express.Router();

router.route('/')
    .get(getFlower)
    .post(protect, authorize( 'admin'),addFlowers);

router.route('/:id')
    .get(getFlower);

module.exports = router;