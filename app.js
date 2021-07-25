const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

//Middlewares
app.use('/posts', ()=>{
    console.log('middleware is running');
});


//Routes
app.get('/', (req, res) => {
    res.send('Welcome to Home page!');
});

app.get('/posts', (req, res) => {
    res.send('List of posts');
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true }, ()=>{
    console.log('connected to DB');
});


//Start listening to server
app.listen(3000);
