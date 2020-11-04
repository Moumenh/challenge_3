const mongoose = require('mongoose')

const creditSchema = mongoose.Schema({
    cardUser: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    creditCard: {
        type : Number,
        unique : true
    },
    expiryDate: Number,
    CVV:Number,
    zipCode: Number
},{timestamps: true})


const Credit = mongoose.model('Credit', creditSchema)

module.exports.Credit = Credit