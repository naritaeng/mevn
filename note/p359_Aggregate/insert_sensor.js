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

const csvFilePath = './sensor.csv'
const csv = require('csvtojson')
const path = require('path')
const _path = path.join(__dirname, csvFilePath)
const Sensor = require('./sensor.js')

const main = async () => {
  const sensorList = await csv().fromFile(_path)
  console.log(sensorList)
  Sensor.insertMany(sensorList).then(() => {
    console.log('데이터 삽입완료')
  })
}

main()
