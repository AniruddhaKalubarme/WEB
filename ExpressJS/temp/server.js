const express = require('express');
const app = express();


app.listen(3000, () => {
    console.log("Server started at port no. 3000");
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', (request, response) => {
    response.send("Hello World");
})

app.post('/api/cars', (request, response) => {
    const { name, car } = request.body;
    console.log(name);
    console.log(car);
    response.send("Car submitted successfully...");
})

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDataBase')
    .then(() => { console.log("Connection successfull") })
    .catch((err) => { console.log(err) });