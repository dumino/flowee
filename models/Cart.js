const mongoose = require('mongoose');


const CartSchema = new mongoose.Schema({
    flower: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Flower'
    }]
});

module.exports = mongoose.model('Cart', CartSchema);