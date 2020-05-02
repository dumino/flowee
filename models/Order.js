const mongoose = require('mongoose');

const orderSchema =  new mongoose.Schema({
    orderPlacer: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    Store: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now();
    },
    cart:{
        type: mongoose.Schema.ObjectId,
        ref: 'Cart'
    }
});


module.exports = mongoose.model('Order', orderSchema);