// ----- Imports -----
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

// ----- Configuration -----
dotenv.config()
const app = express()
const port = process.env.PORT

// ----- Middleware -----
app.use(cors())
app.use(express.json())

app.post('/', (req, res) => {
  res.send('Express + TypeScript Server')
})

app.post('/api/register', (req, res, next) => {
  const { email, password, fullname } = req.body
  console.log(email, password, fullname)
  res.json({ status: 'ok' })
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
