const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/TestApp");

const userSchema = mongoose.Schema({
    Image:String,
    Name:String,
    Email:String,
    Age:Number
})

module.exports = mongoose.model('user', userSchema);