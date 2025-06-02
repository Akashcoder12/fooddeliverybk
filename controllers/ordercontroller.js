const db=require('../db');

exports.placeOrder=(req,res)=>{
     
    const {user_id,food_id,quantity,total_price}=req.body;
    const sql='INSERT INTO orders (user_id,food_id,quantity,total_price) VALUES (?,?,?,?)';
    db.query(sql,[user_id,food_id,quantity,total_price],(err)=>{
          if(err) return res.status(500).json({error:err.message});
          res.json({message:'Order Placed successfully'});
    })
}

exports.getUserOrders=(req,res)=>{
      const userId=req.params.user_id;
      const sql='SELECT * FROM orders WHERE user_id=?';

      db.query(sql,[userId],(err,results)=>{
          if(err) return res.status(500).json({error:err.message});
          res.json(results);
      })
}