const axios = require('axios')
const cheerio = require('cheerio')

const url = 'https://www.melon.com/chart/index.htm'

axios.get(url).then((res) => {
  const $ = cheerio.load(res.data)
  const day = $('.yyyymmdd').text()
  const time = $('.hhmm').text()
  console.log(day, time)
  const song = []
  const singer = []
  $('.ellipsis span a').each(function () {
    if (song.length == 20) return song
    song.push($(this).text())
  })
  song.forEach((v, i) => {
    console.log(`${i + 1}위 - ${v}`)
  })
})
