const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();



//Import routes
const postRoute = require('./routes/post');

//Middlewares
app.use('/posts', postRoute);

// app.use('/posts', ()=>{
//     console.log('middleware is running');
// });


//Routes
app.get('/', (req, res) => {
    res.send('Welcome to Home page!');
});



//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true },{ useUnifiedTopology: true },()=>{
    console.log('connected to DB');
});


//Start listening to server
app.listen(3000);
