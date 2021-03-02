const express = require('express');
const dotenv = require('dotenv')//loads environment variable .env to process.env
const app = express();
const connectDB = require('./config/db')

//Load Config file
dotenv.config({path:'./config/config.env'});

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>
    console.log(`Server is running ${process.env.NODE_ENV} on this port is ${PORT}`)
)