const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const db = require('./config/db');
const app = express();
const port = 3000;

const Student = require('./models/student');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT , OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use(cors());

mongoose.connect(db.url, (err, database) => {
    if (err) return console.log(err);
    const collection = new Student(mongoose, {
        studentsCollection: 'students'
    });  
    require('./routes.js')(app, collection);
    app.listen(port, () => {
      console.log('We are live on ' + port);
    });               
});