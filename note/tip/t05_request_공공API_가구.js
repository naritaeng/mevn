require('dotenv').config()

const request = require('request')
const url =
  'http://apis.data.go.kr/6260000/BusanPopulationStaticService/getPopulationInfo?serviceKey=BfIm6l2ZSlUzsKEA8zK4V9N1Aq7oFY44gR%2B9ncpiAqoqCzFOf2yw2LpHEBcyYX21YOX0Zh4i8cQBhFTkrioeJA%3D%3D&numOfRows=4&pageNo=1&resultType=json'

request(url, (e, res, body) => {
  const rst = JSON.parse(body)
  const ingu = rst.getPopulationInfo.body.items.item
  console.log(ingu)
  ingu.forEach((v, i) => {
    console.log(
      `구:${v.gugun}, 날짜:${v.rateYear}년, 세대수:${v.houseCnt}가구, 총 인구수:${v.totPopCnt}명, 남성인구:${v.mPopCnt}명, 여성인구:${v.fPopCnt}명`
    )
  })
})
