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
    let user = new User
    res.send('done')
})

app.post('/address' , (req,res) => {
    console.log(req.body)
    let address = new Address
    res.send('done')
})

app.post('/credit' , (req,res) => {
    console.log(req.body)
    let credit = new Credit
    res.send('done')
})



app.listen(3000,()=>{
    console.log('listening')
})