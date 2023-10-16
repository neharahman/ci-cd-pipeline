const express = require('express')
const app = express()
require('dotenv').config()


app.get('/',(req,res)=>{
    res.send('hello ci cd pipeline with port 8080')
})
app.get('/home',(req,res)=>{
    res.send('hello home')
})
app.get('/cicd',(req,res)=>{
    res.send('hello ci cd auto deployed hello')
})

app.listen(process.env.PORT,()=>{
    console.log('listening to the server')
})
