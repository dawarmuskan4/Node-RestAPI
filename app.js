const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');
const bodyParser = require('body-parser');

//Connect to db
mongoose.connect('process.env.DB_CONNECTION',{  useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true, } , ()=> {
  console.log('connected to db!')
})

//middlewares
app.use(bodyParser.json());

//Import routes
const postsRoute = require('./Routes/posts');

app.use('/posts', postsRoute);

//Route
app.get('/', (req, res) => {
  res.send("We are on home");
});


//app.get('/specific', (req, res) => {
//  res.send("We are on specific");
//});

//how to listen to the server
app.listen(3000);