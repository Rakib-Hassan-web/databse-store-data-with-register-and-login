

const express =require('express')
const mongoose = require('mongoose');

const app = express()

app.use(express.json())




mongoose.connect('')
  .then(() => console.log(' database Connected!'));










app.get('/' ,(req,res)=>{
    res.send('hello rakib here')
})








app.listen(5000 ,()=>{
    console.log('server is running on port 5000')
})