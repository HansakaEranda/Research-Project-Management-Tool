const express = require('express');
const colors = require('colors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware')

const app = express();

//Hansaka
app.use(express.json())
app.use(express.urlencoded({extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)

//import routes
const studentRoutes = require('./routes/students');
const topicRoutes = require('./routes/topics');
const stGroupRoutes = require('./routes/stGroup');
const staffRoutes = require('./routes/staff');


app.use(bodyParser.json());
app.use(cors());

app.use(studentRoutes);
app.use(topicRoutes);
app.use(stGroupRoutes);
app.use(staffRoutes);


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