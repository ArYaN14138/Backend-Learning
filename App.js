const express=require('express');

const app=express();
// it is used for creating the server instance 

const Notes=[];// it is an empty array which is used to store the notes

/*
title,
discription
*/
app.post('/Notes',(req,res)=>{
    console.log(req.body);
    
}) 

module.exports=app;//it is used to export the app variable so that it can be used in other files 