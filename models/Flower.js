const mongoose = require('mongoose');


const FlowerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Flower', FlowerSchema);