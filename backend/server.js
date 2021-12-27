const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

mongoose.connect('mongodb://localhost:27017/mylogindb', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
    
}, () =>{
    console.log('db connected')
})

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const User = new mongoose.model("User", userSchema)

//Routes
app.post("/login", (req, res) =>{
    const email = req.body.email
    const password = req.body.password

    User.findOne({email: email}, (err, user) =>{
        if(user){
            if(password === user.password){
                res.send({message: "Login Successfull", user: user})
            }
            else{
                res.send({message: "Password is incorrect"})
            }
        }
        else{
            res.send("User not found")
        }
     
    })
})

app.post("/signup", (req, res) =>{

    const { name, email, password} = req.body

    User.findOne({email: email}, (err, user) =>{
        if(user){
            res.send({message: "User already exists"})
        }
        else{
            const user = new User({
                name,
                email,
                password
            })
            user.save(err =>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send({
                        message: "Successfully Registered"
                    })
                }
            })
        }
    })
    
})

app.listen(4000, () => console.log('server is up and running'))