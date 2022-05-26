const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

<<<<<<< HEAD
//import routes
const studentRoutes = require('./routes/students');

//app middleware
app.use(bodyParser.json());

app.use(studentRoutes);

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
=======
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
>>>>>>> 394500e7c380589c42ab2415f15ea676e2fb510c
