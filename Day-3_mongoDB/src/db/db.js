const mongoose=require('mongoose');
//mongoose is a librbary which is uused to connect to the mongodb database to the server


async function connectDB()
{
    //await mongoose.connect("mongodb+srv://aryan1052v:ARYan2133@backend.m6h53bc.mongodb.net/halley")
await mongoose.connect("mongodb://127.0.0.1:27017/halley");
    //mongodb+srv://aryan1052v:ARYan2133@backend.m6h53bc.mongodb.net/ this is cluster url to connect to the mongodb database
    // if connect to data base then mongodb+srv://aryan1052v:ARYan2133@backend.m6h53bc.mongodb.net/halley

    console.log("Connected to MongoDB");



}


module.exports=connectDB;
