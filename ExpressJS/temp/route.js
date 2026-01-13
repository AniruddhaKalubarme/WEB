const express = require('express');
const app = express();


app.use(function(req, res, next){
    console.log("Middleware running");
    next();
})

app.get('/', function(req, res){
    res.send("Hello worldf");
})

app.get('/demo', function(req, res){
    res.send("Hello world in demo page");
})

app.use(function(err, req, res, next) {
  console.error(err.stack); // Log error to console
  res.status(500).send('Something broke!'); // Send error to frontend
});

app.listen(3000)