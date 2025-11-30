

const express =require('express')
const mongoose = require('mongoose');

const app = express()

app.use(express.json())




mongoose.connect('mongodb+srv://secondwork:rr3qaILNgW6gmnEb@cluster0.7ooynjm.mongodb.net/secondwork?appName=Cluster0')
.then(() => console.log(' database Connected!'));






const Schema = mongoose.Schema;

const Userinfo = new Schema({

  name :String,
  email:String,
  password:String,



});

const alluser =mongoose.model('user' ,Userinfo)


// -------------regiser


app.post('/register' , async (req,res) =>{


  const{name,email,password} = req.body;



if(!name) return res.status(400).send({error: "name is required"})
if(!email) return res.status(400).send({error: "email is required"})
if(!password) return res.status(400).send({error: "password is required"})






  const existinguser = await alluser.findOne({
    email
  })

  if( existinguser)  return res.status(400).send({error: "user already exist"})


    const newuser =new alluser ({
      name,email,password
    })

    newuser.save()











  res.status(200).send({ success : "account registered" ,newuser})


})




app.get('/' ,(req,res)=>{
    res.send('hello rakib here')
})








app.listen(5000 ,()=>{
    console.log('server is running on port 5000')
})