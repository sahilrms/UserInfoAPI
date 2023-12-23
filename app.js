const express=require('express');
const app=express();
const connectToDB=require('./config/db.js')
const userRoutes=require('./routes/userRoutes.js')
const cors=require('cors')
require('dotenv').config();
connectToDB();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use('/',userRoutes)
module.exports=app