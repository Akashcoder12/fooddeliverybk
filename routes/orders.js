const express=require('express');
const router=express.Router();
const {placeOrder,getUserOrders}=require('../controllers/ordercontroller');

router.post('/placeOrder',placeOrder);
router.post('/getUserOrder',getUserOrders);

module.exports=router;