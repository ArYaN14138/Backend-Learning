const mongoose=require('mongoose');

const noteSchema=new mongoose.Schema({
    title:String,

    description:String


})


const noteModel=mongoose.model('Note',noteSchema);
//noteModel is the model which is used to interact with the database and it is created using the noteSchema

// ye likhe bina bhi ho jaaega but code complex orr jyada heavy ho jaaega so easy banane ke liye hum ye notemodel banate hai 

module.exports=noteModel;

