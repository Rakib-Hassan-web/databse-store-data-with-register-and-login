

const express =require('express')

const app = express()

app.use(express.json())

const mongoose = require('mongoose');














app.get('/' ,(req,res)=>{
    res.send('hello rakib here')
})








app.listen(5000 ,()=>{
    console.log('server is running on port 5000')
})