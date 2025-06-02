const mysql=require('mysql2');

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"food_delivery"
});

db.connect((err)=>{
     if(err) throw err;
     console.log('database connected');
})

module.exports=db;