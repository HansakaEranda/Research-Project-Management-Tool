const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = 8000;
const URL = "mongodb+srv://rpmt:rpmt321@cluster0.kvck9.mongodb.net/rpmt?retryWrites=true&w=majority";

mongoose.connect(URL)
.then(() => {
    console.log('MongoDB Connection Success!');
})
.catch((err) => console.log('DB Connection ERROR!', err));

app.listen(PORT, () =>{
    console.log(`Application is running successfully on ${PORT}`);
})