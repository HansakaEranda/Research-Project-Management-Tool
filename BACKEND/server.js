const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const topicRoutes = require('./routes/topic');

app.use(bodyParser.json());

app.use(topicRoutes);

const PORT = 8000;
const URL = "mongodb+srv://rpmt:rpmt321@cluster0.kvck9.mongodb.net/rpmtDB?retryWrites=true&w=majority";

mongoose.connect(URL)
.then(() => {
    console.log('MongoDB Connection Success!');
})
.catch((err) => console.log('DB Connection ERROR!', err));

app.listen(PORT, () =>{
    console.log(`Application is running successfully on ${PORT}`);
})