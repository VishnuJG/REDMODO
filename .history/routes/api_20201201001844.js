const express=require('express');
const router=express.Router();
const BlogPost=require('../models/blogPost');


//Routes
router.get('/',(req,res)=>{
    BlogPost.find({ })
    .then((data)=>{
        console.log('Data: ',data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('Error: ',error);
    });
});
router.post('/save',(req,res)=>{
    console.log('Body : ',req.body);
    const data=req.body;
    const newBlogPost=new BlogPost(data);

    newBlogPost.save((error)=>{
        if(error){
            res.status(500).json({msg:'Sorry, Internal Server error'});
            return;
        }
        
        return res.json({
            msg:'Your data has been saved!!!'
        });
        
    });
    res.json({
        msg:'We received your data!!!'
    });
    res.end();
});
router.get('/name',(req,res)=>{
    const data={
        username:'Surabhi',
        age:17
    };
    res.json(data);
});

module.exports= router;