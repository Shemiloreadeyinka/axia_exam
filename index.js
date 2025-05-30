const express= require('express')
const app= express()
const dotenv= require("dotenv")
dotenv.config()
const userRoutes=require('./routes/userRoutes')

const connectDB = require('./config/db')
const PORT= process.env.PORT

connectDB()
app.use(express.json())
app.use('/api/users',userRoutes)




console.log(process.env.MONGO_URI)

app.listen(PORT,()=>{console.log(`express app is running on port ${PORT}`)})