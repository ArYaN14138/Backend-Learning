// Server.js is here tp start the server
const  app=require('./src/app');//importing the app.js files from the src folder

app.listen(3000,()=>{
    console.log("running perfectly");
    
})

//the server in thich the data is stored in the notes array and we perform the crud operation on it
/*const Notes=[];//empty array to store the data coming from the frontend


the data which is stored in the notes array it is assigned by the ram and it is temporary in nature and it will be lost when the server is restarted. so we use database to store the data permanently.

is to solve this problem we use database to store the data permanently. there are many databases available like mongodb, mysql, postgresql etc. we can use any of them according to our requirement. in this project we will use mongodb as our database.




Atlas admin can access anything from the database cluster 



if we connect the server to database then we use mongoose to connect it. mongoose is an ODM(Object Data Modelling) library for mongodb and it is used to connect the server to the database.

*/