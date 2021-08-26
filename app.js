const express = require('express');
const app = express();
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');// body-parser is decremented
require('dotenv').config();


//app.use(bodyParser.json()); //decremented
app.use(express.json());


//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true  },() => {
    console.log("connected to DB");
  }
);


//Import routes
const postRoute = require('./routes/posts');
//Middlewares
app.use('/posts', postRoute);
app.use('/posts', ()=>{
    console.log('middleware is running');
});
 

//Routes
app.get('/', (req, res) => {
    res.send('Welcome to Home page!');
});
app.post('/posts', (req, res) => {
    res.send('Welcome to Post page!');
});


//Start listening to server
app.listen(8000, () => console.log(`app is running on port 8000`));
