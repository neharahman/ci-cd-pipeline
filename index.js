const express = require('express')
const app = express()
require('dotenv').config()


app.get('/',(req,res)=>{
    res.send('hello ci cd pipeline')
})
app.get('/home',(req,res)=>{
    res.send('hello home')
})


app.listen(process.env.PORT,()=>{
    console.log('listening to the server')
})