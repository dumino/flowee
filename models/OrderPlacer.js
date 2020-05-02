const mongoose = require('mongoose');

const OrderPlacerSchema = new mongoose.Schema({
  orderPlacer: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
  },
  Store: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
  },
  cart: {
    type: mongoose.Schema.ObjectId,
      ref: 'Cart'
  },
  createdAt: {
      type: Date,
      default: Date.now()
  },
  orderPlace: {
      type: String,
      enum: ['orderAccept', 'orderReject', 'orderPending']
  }
});



module.exports = mongoose.model('OrderPlacer', OrderPlacerSchema);
