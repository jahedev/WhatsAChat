const mongoose = require('mongoose')
const { Schema } = mongoose

const User = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullname: { type: String, required: true },
    createdAt: { type: String, required: true },
  },
  { collection: 'user-data' }
)

const model = mongoose.model('UserData', User)
module.exports = model
