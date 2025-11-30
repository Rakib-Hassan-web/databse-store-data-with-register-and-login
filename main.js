

const express =require('express')
const mongoose = require('mongoose');

const app = express()

app.use(express.json())




mongoose.connect('mongodb+srv://secondwork:rr3qaILNgW6gmnEb@cluster0.7ooynjm.mongodb.net/secondwork?appName=Cluster0')
.then(() => console.log(' database Connected!'));






app.get('/' ,(req,res)=>{
    res.send('hello rakib here')
})








app.listen(5000 ,()=>{
    console.log('server is running on port 5000')
})