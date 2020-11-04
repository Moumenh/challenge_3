const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(__dirname + '/./public'))


mongoose.connect('mongodb+srv://m0moooZ:momoftw1!@react-blog.pf36a.mongodb.net/Checkout?retryWrites=true&w=majority' ,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/app', function(req, res){
    res.sendFile(__dirname+'/./compiled/client/app.js');
})



app.listen(3000,()=>{
    console.log('listening')
})