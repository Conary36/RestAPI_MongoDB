const express = require('express');

const app = express();

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

//Start listening to server
app.listen(3000);