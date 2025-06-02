const db=require('../db');

exports.addFood=(req,res)=>{
      const {image,name,price,description}=req.body;

      const sql='INSERT INTO foods (image,name,price,description) VALUES (?,?,?,?)';
      db.query(sql,[image,name,price,description],(err)=>{
         if(err) return res.status(500).json({error:err.message});
         res.json({message:'Food item added'});
      });
};


exports.getFoods=(req,res)=>{
     const sql='SELECT * FROM foods';

     db.query(sql,(err,results)=>{
          if(err) return res.status(500).json({error:err.message});
          res.json(results);
     });
};