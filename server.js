const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const {User} = require('./models/Users')
const {Credit} = require('./models/Credits')
const {Address} = require('./models/Address')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use(express.static(__dirname + '/./public'))


mongoose.connect('mongodb+srv://m0moooZ:momoftw1!@react-blog.pf36a.mongodb.net/Checkout?retryWrites=true&w=majority' ,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/app', (req, res) =>{
    res.sendFile(__dirname+'/./compiled/client/app.js');
})

app.post('/user' , (req,res) => {
    console.log(req.body)
    let user = new User(req.body)
    user.save( (err , user) => {
        if(err) {
            res.status(404).send('failed')
        } else {
            res.status(201).json({
                success : true,
                user : user._id
            })
        }
    })
    
})

app.post('/address' , (req,res) => {
    console.log(req.body)
    let address = new Address(req.body)
    address.save((err,address) => {
        if(err){
            res.status(404).send('failed')
        }else{
            res.status(201).json({
                success : true,
                address : address._id
            })
        }
    })
    
})

app.post('/credit' , (req,res) => {
    console.log(req.body)
    let credit = new Credit(req.body)
    credit.save((err,credit) => {
        if(err){
            res.status(404).send('failed')
        }else{
            res.status(201).json({
                success : true,
                credit : credit._id
            })
        }
    })
})



app.listen(3000,()=>{
    console.log('listening')
})