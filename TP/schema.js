const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Chat = new Schema({
  message_id: Number,
  from: {
    first_name: String,
    last_name: String
  },
  date: { type: Date, dafault: Date.now, required: true },
  text: String
})

module.exports = mongoose.model('mybot', Chat, 'mybot')
