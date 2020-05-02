const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

const Cart = require('../models/Cart');
const Order = require('../models/Order');
const OrderPlacer = require('../models/OrderPlacer');


exports.requestOrder = async (req, res, next) => {
 


    let OrderRequest = await  orderPlacer.create({ 
        orderPlacer: req.user.id,
        store: req.params.storeId,
        orderPlace: 'pending',
        Cart: req.param.cartId });
 
                res.status(200).json({
                    success: true,
                    data: OrderRequest,
                    message: 'request send',
                    code: 'Success-request'
                });
    
};

exports.acceptOrder = async (req, res, next) => {

 
    const accept = await orderPlacer.findOneAndUpdate({ 
        orderPlacer: req.params.id,
        store: req.user.id},
        {
            orderPlace: 'accepted'
        }, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            success: true,
            data: accept,
            message: 'order accepted',
            code: 'accept-order'
        });

    const order = await Order.create({orderPlacer: req.params.id, store: req.user.id, cart: accept.cart })

    

 
}