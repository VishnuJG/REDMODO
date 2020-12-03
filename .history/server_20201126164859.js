const express =require('express');
const mongoose =require('mongoose');
const morgan =require('morgan');
const path =require('path');
const app =express();
const PORT=process.env.PORT || 8080;
const MONGODB_URI='mongodb+srv://Alexiosron:vishnu2001@cluster0.s0qps.mongodb.net/test?retryWrites=true&w=majority';


mongoose.connect(MONGODB_URI ||'mongodb://localhost/mern_base',{
    useNewUrlParser:true,
    useUnifiedTopology:true 
});
mongoose.connection.on('connected',()=>{
    console.log('Mongoose is connected!!***');
});
app.use(morgan('tiny'));

app.get('',(req,res)=>{
    res.json();
})

