const express = require('express');
const cors = require('cors');
require('dotenv').config();
const  testingRoutes=require('./routes/testingRoutes');
const connectDB=require('./config/DBconfig')
const app=express();
const msgRoutes=require('./routes/msgRoutes');

app.use(cors());
app.use(express.json());    
app.use("/api/v1",testingRoutes);  
app.use("/api/v1",msgRoutes);

app.get('/',(req,res)=>{
     res.send("hello i am server response");
})

const portNo=process.env.PORT||3000;
app.listen(portNo,()=>{
    console.log("server is running... at:"+portNo);
    connectDB();
})          
