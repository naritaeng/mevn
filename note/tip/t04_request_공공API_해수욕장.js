require('dotenv').config()

const request = require('request')
const url =
  'http://apis.data.go.kr/1360000/BeachInfoservice/getWhBuoyBeach?serviceKey=BfIm6l2ZSlUzsKEA8zK4V9N1Aq7oFY44gR%2B9ncpiAqoqCzFOf2yw2LpHEBcyYX21YOX0Zh4i8cQBhFTkrioeJA%3D%3D&beach_num=1&searchTime=202205011600&dataType=JSON'

request(url, (e, res, body) => {
  const rst = JSON.parse(body)
  console.log(rst)
  console.log(rst.response.body.items.item[0])
})
