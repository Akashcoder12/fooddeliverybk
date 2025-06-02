const db=require('../db');

exports.registerUser=(req,res)=>{
     const {name,email,password}=req.body;
     const sql='INSERT INTO users (name,email,password) VALUES (?,?,?)';
     
     db.query(sql,[name,email,password],(err,results)=>{
         if(err) return res.status(500).json({error:err.message});
         res.json({message:'User registered successfully'});

     })
}


exports.loginUser=(req,res)=>{
       const {email,password}=req.body;
       const sql='SELECT * FROM users WHERE email=? AND password=? ';
       db.query(sql,[email,password],(err,results)=>{
          if(err) return res.status(500).json({error:err.message});
          if(results.length===0) return res.status(401).json({message:'Invalid credentials'});
          res.json({message:'login successful',user:results[0]});
       })
}