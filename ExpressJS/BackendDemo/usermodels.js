const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/Shivpratap');

const userSchema = mongoose.Schema({
    name:String,
    age:Number,
    isactive:Boolean
});

const User = mongoose.model("user", userSchema);

module.exports = User;