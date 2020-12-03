const express =require('express');
const mongoose =require('mongoose');
const morgan =require('morgan');
const path =require('path');
const app =express();
const cors =require('cors');


const PORT=process.env.PORT || 8080;
const MONGODB_URI='mongodb+srv://Alexiosron:vishnu2001@cluster0.s0qps.mongodb.net/test?retryWrites=true&w=majority';


mongoose.connect(MONGODB_URI ||'mongodb://localhost/mern_base',{
    useNewUrlParser:true,
    useUnifiedTopology:true 
});
mongoose.connection.on('connected',()=>{
    console.log('Mongoose is connected!!***');
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cors());
app.use(morgan('tiny'));
app.use('/api',routes);

app.listen(PORT,console.log(`Server is running at ${PORT}`));

