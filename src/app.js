const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const app = express()
const Message = require("./models/contact");
const contact_route = require("./routes/contact")
dotenv.config();
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{console.log("database connected......")})
.catch(()=>{console.log("database not connected")})


app.use(express.json())
app.use("/api", contact_route)



const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`server running on port:${port}`)
})