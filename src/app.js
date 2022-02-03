// const express = require("express")
// const mongoose = require("mongoose")
// const dotenv = require("dotenv").config();
// const app = express()
// const bcrypt = require('bcrypt')


//Import using ES6
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
// import swaggerUI from 'swagger-ui-express';
// import documentation from '../documentation';
// import swaggerJsDoc from 'swagger-jsdoc';

dotenv.config();
const app = express()


// const options = {
//     definition: {
//         openapi:"3.0.0",
//         info:{
//             title:'My Brand Api',
//             version:"1.0.0",
//             description:"My brand api is background engine for my portfolio website. it runs on NodeJs using MongoDB as database with Mongoose as the ORM. I am using JWT for handling authentications and JOI for Validating inputs from the user before they are sent to the server and Bcrypt for hashing passwords stored in the database."
//         },
//         servers:[
//             {
//                 url:"http://127.0.0.1:3000"
//             }
//         ],
      
//     },
//     apis:["./routes/*.js"]
// }
// const specs = swaggerJsDoc(options)


// Import Routes

const contact_route = require("./routes/contact");
const users_route = require("./routes/usersRoute")
const blog_route = require("./routes/blogRoute")

//Database connection
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{console.log("database connected......")})
.catch((error)=>{console.log("database not connected"+error)})

// Route
app.use(express.json())
app.use("/api", contact_route)
app.use("/api", users_route)
app.use("/api", blog_route)
// app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(documentation))


//port connection
const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`server running on port:${port}`)
}) 