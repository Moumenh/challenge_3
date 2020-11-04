const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type:String,
        maxlength:50
    },
    email: {
        type:String,
        trim:true,
        unique: 1 
    },
    password: {
        type: String,
        minglength: 5
    },
    lineOne: {
        type:String,
        maxlength: 50
    },
    lineTwo : {
        type:String,
        maxlength: 50
    },
    city: String,
    state : String,
    zipCode :Number,
    phone: Number

},{timestamps: true})

const User = mongoose.model('User', userSchema)


module.exports.User = User