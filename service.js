const express = require("express");
const app = express();

app.get('/', function (req, res) {
    res.send('<h1>Welcome to Express Node Microservice</h1>');
})

app.listen(8080, function () {
   console.log('Express Microservice is running on port 8080');
});