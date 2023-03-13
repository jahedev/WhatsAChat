const express = require('express')
const router = express.Router()
const User = require('../models/user.model')
const jwt = require('jsonwebtoken')

// ----- SIGNUP ROUTE -----
router.post('/register', async (req, res, next) => {
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

// ----- LOGIN ROUTE -----
router.post('/login', async (req, res, next) => {
  const { email, password } = req.body

  const user = await User.findOne({ email, password })

  if (user) {
    const token = jwt.sign(
      {
        email: user.email,
      },
      process.env.JWT_SECRET
    )

    return res.json({ status: 'ok', user: true, token })
  } else {
    return res.json({ status: 'ok', user: false })
  }
})

// ----- QUOTE ROUTE -----
router.get('/verifyAuth', async (req, res, next) => {
  const token = req.headers['x-access-token']

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
    const { email } = decodedToken
    const user = await User.findOne({ email })
    if (user) {
      return res.json({
        status: 'ok',
        user: true,
        data: {
          email: user.email,
          fullname: user.fullname,
        },
      })
    } else {
      return res.json({ status: 'ok', user: false, token })
    }
  } catch (error) {
    console.log(error)
    res.json({ status: 'error', msg: 'Request was invalid.' })
  }
})

module.exports = router
