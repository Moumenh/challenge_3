const mongoose = require('mongoose')
const { string } = require('prop-types')

const addressSchema = mongoose.Schema({
    userId: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    lineOne :String,
    lineTwo :String,
    city: String,
    state : String,
    zipCode :Number,
    phone: Number

},{timestamps: true})

const Address = mongoose.model('Address', addressSchema)


module.exports.Address = Address