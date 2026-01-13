const path = require('path');
const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    fs.readdir('./files', function (err, files) {
        if (err) console.log("Error occured during file dir" + err);
        else res.render('index', { files: files });
    })
})

app.post('/create', function (req, res) {
    const fileName = req.body.title.split(' ').join('') + '.txt';
    fs.writeFile(`./files/${fileName}`, req.body.details, function (err) {
        if (err) console.log(err);
        else res.redirect("/");
    });
})

app.get('/file/:filename', function(req, res){
    fs.readFile(`./files/${req.params.filename}`, 'utf8', function(err, data){
        if(err) console.log(err);
        else res.render('data', {filename: req.params.filename, data: data});
        // console.log(data);
    })
})

app.get('/rename/:filename', function(req, res){
    res.render('rename', {filename: req.params.filename});
})

app.post('/rename/:filename', function(req, res){
    console.log(req.body);
    fs.rename(`./files/${req.body.filename}`, `./files/${req.body.newfilename}`, function(err){
        if(err) console.log(err);
        else res.redirect("/");
    });
})

app.get('/delete/:filename', function (req, res) {
    fs.unlink(`./files/${req.params.filename}`, function (err) {
        if (err) console.log(err);
        res.redirect("/");
    });
})

app.listen(4000, () => {
    console.log("Server is started");

})
