const express=require('express');
const cors=require('cors');
const db=require('./db');


const app=express();
app.use(cors());
app.use(express.json());
app.use('/images', express.static('server/images'));


//Routes

app.use('/api/users',require('./routes/users'));
app.use('/api/foods',require('./routes/foods'));
app.use('/api/orders',require('./routes/orders'));

const port=6000;

app.listen(port,()=>{
      console.log(`server is running at ${port}`)
})

