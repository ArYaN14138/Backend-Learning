const express= require('express');

const app= express();//creating the server instance

app.get('/',(req,res)=>// req=>request, res=>response

// a data which is sent by the frontend to backend is called request and the data sent by backend to frontend is called response
{
    res.send('hello_world')
})
app.get('/about',(req,res)=>
{
    res.send('about_page is rising up')
})

app.listen(3000)
