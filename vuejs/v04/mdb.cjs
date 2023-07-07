const mongoose = require('mongoose')
const VSchema = require('./schema.cjs')
const USER = process.env.dbid
const PWD = process.env.dbpw
const HOST = process.env.dbhost
const DB = process.env.db
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`

mongoose.set('strictQuery', false) // 필수
mongoose
  .connect(mongodbURL, { useNewUrlParser: true })
  .then(() => console.log('스키마 로드완료!!\nMDB 접속완료!!'))
  .catch((e) => console.log(e))
module.exports = VSchema
