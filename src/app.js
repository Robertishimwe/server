// const express = require("express")
// const mongoose = require("mongoose")
// const dotenv = require("dotenv").config();
// const app = express()
// const bcrypt = require('bcrypt')


//Import using ES6
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import swaggerUI from 'swagger-ui-express';
import documentation from '../documentation';
import swaggerJsDoc from 'swagger-jsdoc';
import cors from 'cors';


//  const corsOptions = {
//      origin: '*',
//      optionsSuccessStatus: 200 
//  }
const corsOptions = { origin: '*', optionsSucessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
} 

// app.use(cors({
//     origin: '*'
// }));



// const whitelist = ['https://robertishimwe.github.io/integration', 'http://developer2.com']
// const corsOptions = {
//   origin: (origin, callback) => {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error())
//     }
//   }
// }



  

dotenv.config();
const app = express()
app.use(express.json());
app.use(express.json({limit: '80mb'}));
app.use(express.urlencoded({limit: '80mb'}));



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
app.get("/test",cors(corsOptions),(req,res)=>{
    res.json({message:"you made it blooo"})
})
app.use("/api",cors(corsOptions), contact_route)
app.use("/api",cors(corsOptions), users_route)
app.use("/api",cors(corsOptions), blog_route)
app.use("/api-docs",cors(corsOptions),swaggerUI.serve,swaggerUI.setup(documentation))
app.use(cors(corsOptions))
// app.use("/api",cors(corsOptions),"*")
// app.all(cors(corsOptions))

//port connection
const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`server running on port:${port}`)
}) 
module.exports = app
