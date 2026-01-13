const express = require('express');
const app = express();

const User = require("./usermodels");

app.get('/', function(req, res){
    res.send("Hello")
})

app.get('/create', (req, res) => {
    User.create({
        name:"anirudda",
        age:21,
        isactive:true
    },
        {
        name:"shivpratap",
        age:13,
        isactive:false
        })
    res.redirect('/');  
})

app.get('/update', async (req, res) => {
    const updated = await User.findOneAndUpdate(
        { name: "anirudda" },
        {
            name: "ani",
            age: 21,
            isactive: true
        },
        { new: true })
    console.log(updated);
    res.redirect('/');
})

app.get('/read', async (req, res) => {
    let users = await User.find();
    res.send(users);
})

app.get('/delete', async (req, res) => {
    let users = await User.findOneAndDelete({name:"ani"});
    res.redirect('/');
})

app.listen(3000);