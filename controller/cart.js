const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

const Cart = require('../models/Cart');


exports.createCart = asyncHandler(async (req, res, next) => {
  
    const cart = await Cart.create({flower: req.params.flowerId});

  res.status(201).json({
    success: true,
    data: cart
  });

});

exports.updateCart = asyncHandler(async (req, res, next) => {
    let cart = await Cart.findById(req.params.id);
  
    if (!cart) {
      return next(
        new ErrorResponse(`Cart not found with id of ${req.params.id}`, 404)
      );
    }
  
    cart = await Cart.findOneAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
  
    res.status(200).json(
        {
             success: true,
              data: Cart 
        });
  });