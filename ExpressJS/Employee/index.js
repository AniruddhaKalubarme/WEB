const express = require("express");
const app = express();
const path = require('path');
const userModel = require('./models/user');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render("../Routes/Home");
})

app.get('/submit', async function (req, res) {
    let users = await userModel.find();
    // console.log(users)
    res.render('../Routes/Data', { users })
})

app.get('/Delete/:id', async function (req, res) {
    await userModel.findOneAndDelete({ _id: req.params.id })
    res.redirect('/submit')
})

app.get('/Edit/:id', async function (req, res) {
    let user = await userModel.findOne({ _id: req.params.id })
    res.render('../Routes/Edit', { user })
})

app.post('/submit', function (req, res) {
    const { Name, Age, Profile, Email } = req.body;

    userModel.create({
        Name,
        Age,
        Image: Profile,
        Email
    })

    res.redirect('/submit');
})

app.post('/Update/:id', async function (req, res) {
    const { Name, Age, Profile, Email } = req.body;

    await userModel.findOneAndUpdate({ _id: req.params.id }, { Name, Age, Image: Profile, Email })

    res.redirect('/submit');
})

app.listen(3000, () => {
    console.log("Server started successfully");
})

