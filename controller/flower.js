const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Flower = require('../models/Flower');


exports.getFlowers = asyncHandler(async (req, res, next) => {
    if (req.params.flowerId) {
      const flowers = await Flower.find({ flower: req.params.flowerId });
  
      return res.status(200).json({
        success: true,
        count: flowers.length,
        data: flowers
      });
    } else {
      res.status(200).json(res.advancedResults);
    }
  });
  

exports.addFLower = asyncHandler(async (req, res, next) => {

    const flower = await FLower.create(req.body);

    res.status(200).json({
        success: true,
        data: flower
    });

});

exports.getFlower = asyncHandler(async (req, res, next) => {
    const flower = await Flower.findById(req.params.id)
  
    if (!flower) {
      return next(
        new ErrorResponse(`No flower with the id of ${req.params.id}`, 404)
      );
    }
  
    res.status(200).json({
      success: true,
      data: flower
    });
  });