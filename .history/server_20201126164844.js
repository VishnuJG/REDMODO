const express =require('express');
const mongoose =require('mongoose');
const morgan =require('morgan');
const path =require('path');
const app =express();
const PORT=process.env.PORT || 8080;
const MONGODB_URI='mongodb+srv://Alexiosron:vishnu2001@cluster0.s0qps.mongodb.net/test?retryWrites=true&w=majority';

app.use(morgan('tiny'));

app.get('',(req,res)=>{
    res.json();
})

