const mongoose = require('mongoose')

const addressSchema = mongoose.Schema({
    userId: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    city: String,
    state : String,
    zipCode :Number,
    phone: Number

},{timestamps: true})

const Address = mongoose.model('Address', addressSchema)


module.exports.Address = Address