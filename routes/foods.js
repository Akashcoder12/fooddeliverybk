const express=require('express');
const router=express.Router();
const {addFood,getFoods}=require('../controllers/foodcontroller');

router.post('/addFood',addFood);
router.post('/getFood',getFoods);

module.exports=router;