// const de = require('dotenv')
// de.config()

require('dotenv').config()

const request = require('request')
// const { XMLParser, XMLBuilder, XMLValidator} = require("fast-xml-parser");
const { XMLParser } = require('fast-xml-parser')
const parser = new XMLParser()

const url = 'https://apis.data.go.kr/6260000/BusanBIMS/busStopList?serviceKey='
const key = process.env.okey
const bstop = encodeURI('서면역') // <-> decodeURI()
const opt = '&pageNo=1&NumofRows=100&bstopnm=' + bstop

const urlTotal = url + key + opt
// console.log('en:', bstop)
// console.log('de:', decodeURI(bstop))
console.log(urlTotal)

request(urlTotal, (e, res, body) => {
  const rst = parser.parse(body)
  const _ = rst.response.body.items
  console.log(_)
})

// 필수로 알아야 하는 것
// 1. 환경변수
// 2. encodeURI <-> decodeURI
// 3. XMLParser
