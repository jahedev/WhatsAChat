// ----- Imports -----
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb')
const mongoose = require('mongoose')

// 21:56 - https://www.youtube.com/watch?v=Ejg7es3ba2k
// ----- Configuration -----
dotenv.config()
const app = express()
const port = process.env.PORT

// ----- Database Config -----
const DB_URI = process.env.DB_URI
mongoose.set('strictQuery', false)
mongoose.connect(DB_URI)
console.log(mongoose.connection.readyState)

// ----- Middleware -----
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Express + TypeScript  Server')
})

// ----- ROUTES -----
app.use('/api', require('./api'))

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
