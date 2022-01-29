const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config();
const User = require("./models/users")
const app = express()
const Message = require("./models/contact");
const contact_route = require("./routes/contact");
const users_route = require("./routes/usersRoute")
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{console.log("database connected......")})
.catch((error)=>{console.log("database not connected"+error)})


app.use(express.json())
app.use("/api", contact_route)
app.use("/api", users_route)

// // app.get("/user/login",async (req,res)=>{
// //     const user = new User({
// //         "userEmail":req.body.userEmail,
// //         "userPassword":req.body.userPassword
// //     })  


// })








const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`server running on port:${port}`)
}) 