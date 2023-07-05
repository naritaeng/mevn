require('dotenv').config()
const mongoose = require('mongoose')
const USER = process.env.dbid
const PWD = process.env.dbpw
const HOST = process.env.dbhost
const DB = process.env.db
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`
// mongoose.set('useFindAndModify',false) // 6.0이후부터는 자동관리
mongoose.set('strictQuery', false) // 권장사항 추가
mongoose
  .connect(mongodbURL, { useNewUrlParser: true }) //
  .then(() => console.log('Connection successful!!'))
  .catch((e) => console.log(e))

const Schema_ori = require('./schema.js')
module.exports = Schema_ori
