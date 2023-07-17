require('dotenv').config()

const request = require('request')
const express = require('express')
const logger = require('morgan')
const path = require('path')
const app = express()
const _path = path.join(__dirname, './dist')
const axios = require('axios')
const cheerio = require('cheerio')

/* POST를 위한 구문 */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* 스태틱 경로 */
app.use('/', express.static(_path))

/* 로그 INFO */
app.use(logger('tiny'))

const url1 =
  'https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=BfIm6l2ZSlUzsKEA8zK4V9N1Aq7oFY44gR%2B9ncpiAqoqCzFOf2yw2LpHEBcyYX21YOX0Zh4i8cQBhFTkrioeJA%3D%3D&sidoName=%EB%B6%80%EC%82%B0&returnType=json'

app.get('/public', (req, res) => {
  request(url1, (error, response, body) => {
    const data = JSON.parse(body).response.body.items
    const area = data.stationName
    const pm10 = data.pm10Value
    res.send({ area, pm10 })
  })
})

const url2 =
  'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%9D%8C%EC%95%85%EC%88%9C%EC%9C%84'
app.get('/song', (req, res) => {
  axios.get(url2).then((res) => {
    const $ = cheerio.load(res.data)
    const song = []
    $('.tit_area').each(function () {
      song.push($(this).text())
    })
    song.forEach((v, i) => {
      console.log(`${i + 1}위 - ${v}`)
    })
    res.send(song)
  })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000...')
})
