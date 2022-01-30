const blogController = require("./controller/blogController")

const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config();
// const User = require("./models/users")
// const Article = require("./models/blog")
const app = express()
const bcrypt = require('bcrypt')
// const Message = require("./models/contact");
const contact_route = require("./routes/contact");
const users_route = require("./routes/usersRoute")
const blog_route = require("./routes/blogRoute")
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{console.log("database connected......")})
.catch((error)=>{console.log("database not connected"+error)})


app.use(express.json())
app.use("/api", contact_route)
app.use("/api", users_route)
app.use("/api", blog_route)

//must be removed


















const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`server running on port:${port}`)
}) 