


const express =require('express');


const app = express();

app.use(express.json())

app.get('/', (req,res)=>{
    res.send('rakib')
})


app.listen(5000 ,()=>{
    console.log('server is runnig on port 5000')
})

