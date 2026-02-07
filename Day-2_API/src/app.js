const express=require('express');
//to create the server 

const app=express();
//to create the server instance

app.use(express.json());//middleware. siple mtlb jo data hum postman se yaha bhejege usko show karega json format mei 
// to convert the data which is coming  from the frontend to json format


const Notes=[];// it is an empty array which is used to store the notes

/*
title,
discription
*/
app.post('/Notes',(req,res)=>{
    //console.log(req.body);
    Notes.push(req.body);// to push the data which is coming from the frontend to the Notes array
    res.status(201).json({message:"note added successfully",Notes:Notes});//201 means something is created successfully
    
}) 

app.get('/Notes',(req,res)=>{
    res.status(200).json({

        message:"Notes fetched successfully",
        Notes:Notes//

    })
})

//delete/Notes/:index.    at the place of index we put the index walue from the array and it is dynamic in nature 
app.delete('/Notes/:index',(req,res)=>{

    const index=req.params.index;
    //params is used to get the index of  the node which we want to delete

   delete Notes[index];//to delete the node at the given index
   // Notes.splice(index,1);
    res.status(200).json({
        message:"note deleted successfully",
        Notes:Notes
    })
})


app.patch('/Note/:index',(req,res)=>{

    const index=req.params.index;
    const description=req.body.description;

    Notes[index].description=description;


    res.status(200).json({
        message:"note is updated successfully",
        Notes:Notes
    })

})

module.exports=app;

/*
GET:Server ke sath data fetch karwana ho tab use karte hai 
POST:Server per jab data send karna ho tab 
PATCH:Server per jo data already present hai uko update karna ho toh
DELETE: Server per jo data hai agar usko delete karna ho toh 


JO app.jsx file hai uska main kaam hai sever ko create karna 

jo Server.js(Root folder mei rahti hai ye file) file hai uska kaam hai server ko start karna 
*/