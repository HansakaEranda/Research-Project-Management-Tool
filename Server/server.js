const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//import routes
const studentRoutes = require('./routes/students');
const topicRoutes = require('./routes/topic');

//app middleware
app.use(bodyParser.json());

app.use(studentRoutes);
app.use(topicRoutes);

const PORT = 8000;
const DB_URL='mongodb+srv://rpmt:rpmt321@cluster0.kvck9.mongodb.net/rpmtDB?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(() => {
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});