const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.port || 3000;
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();

const note = require('./rotes/api/note');

const app = express();

//middleware for bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());


const db = require('./setup/myurl').mongoURL

mongoose.connect(db)
    .then(()=> console.log('Connected successfully'))
    .catch((error) => console.log(error));

app.get('/',(req,res)=>{
    res.redirect('/note')
});
    

app.use('/note',note);

app.listen(port,()=>{
    console.log(`App is running at port ${port}`)
});
