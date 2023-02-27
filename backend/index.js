// ----- Imports -----
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb')
const mongoose = require('mongoose')
const User = require('./models/user.model')
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

app.post('/', (req, res) => {
  res.send('Express + TypeScript Server')
})

app.post('/api/register', async (req, res, next) => {
  const { email, password, fullname } = req.body
  const createdAt = Date()

  if (!(await User.findOne({ email }))) {
    await User.create({ email, password, fullname, createdAt })
  } else {
    return res.json({ status: 'error', message: 'Duplicate email address.' })
  }

  res.json({ status: 'ok', message: 'User created.' })
  try {
  } catch (error) {
    res.json({ status: 'error', message: 'Internal Server Error.' })
  }
})

app.post('/api/login', async (req, res, next) => {
  const { email, password } = req.body

  const user = await User.findOne({ email, password })

  if (user) {
    return res.json({ status: 'ok', user: true })
  } else {
    return res.json({ status: 'ok', user: false })
  }
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
