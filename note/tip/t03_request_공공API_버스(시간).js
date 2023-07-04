require('dotenv').config()

const request = require('request')
const { XMLParser } = require('fast-xml-parser')
const parser = new XMLParser()

const url = 'http://apis.data.go.kr/6260000/BusanBIMS/bitArrByArsno?serviceKey='
const key = process.env.okey
const bstop = encodeURI('서면역') // <-> decodeURI()
const opt = '&arsno=05712&bstopnm=' + bstop

const urlTotal = url + key + opt

console.log(urlTotal)

request(urlTotal, (e, res, body) => {
  const rst = parser.parse(body)
  const _a = rst.response.body.items.item
  // console.log(_a)
  _a.forEach((v, i) => {
    console.log(
      `정류장: ${v.nodenm}, 버스번호: ${v.lineno}, 남은 시간: ${v.min1}분, 남은 정류소: ${v.station1}개, 다음버스 남은시간: ${v.min2}분, 다음버스 남은 정류소: ${v.station2}`
    )
  })
})

// select - option =>
// 셀렉트로 3가지의 정거장을 만들기
// 서면역(한전)정거장 : 05712
// 웹페이지에
// css로 예쁘게 시각화하여 정보 제공
// fetch
