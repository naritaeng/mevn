require('dotenv').config()

const request = require('request')
const url =
  'https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=BfIm6l2ZSlUzsKEA8zK4V9N1Aq7oFY44gR%2B9ncpiAqoqCzFOf2yw2LpHEBcyYX21YOX0Zh4i8cQBhFTkrioeJA%3D%3D&sidoName=%EB%B6%80%EC%82%B0&returnType=json'

request(url, (e, res, body) => {
  const rst = JSON.parse(body)
  const jeonpo = rst.response.body.items
  jeonpo.forEach((v, i) => {
    console.log(
      `지역 : ${v.stationName},오존: ${v.o3Value},일산화탄소: ${v.coValue},미세먼지: ${v.pm10Value}`
    )
  })
})
