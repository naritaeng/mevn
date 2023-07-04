require('dotenv').config()
const express = require('express')
const request = require('request')

const app = express()
const client_id = process.env.nid
const client_secret = process.env.npw

app.use(express.urlencoded({ extended: true })) // 요청의 본문을 해석하기 위한 미들웨어 등록

app.get('/', function (req, res) {
  // 입력 폼을 표시하는 라우트
  res.send(`
    <form action="/trans" method="POST">
      <input type="text" name="source" placeholder="원본 언어" required>
      <input type="text" name="target" placeholder="목표 언어" required>
      <textarea name="text" placeholder="번역할 텍스트" required></textarea>
      <button type="submit">번역하기</button>
    </form>
  `)
})

app.post('/trans', function (req, res) {
  // 번역을 처리하는 라우트
  const { source, target, text } = req.body

  const api_url = 'https://openapi.naver.com/v1/papago/n2mt'
  const options = {
    url: api_url,
    form: { source, target, text },
    headers: {
      'X-Naver-Client-Id': client_id,
      'X-Naver-Client-Secret': client_secret
    }
  }

  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
      console.log(body)
      let result = JSON.parse(body)
      let translatedText = result.message.result.translatedText
      let html = `
        <h1>번역 결과</h1
        <p>${translatedText}</p>
      `
      res.end(html)
    } else {
      res.status(response.statusCode).end()
      console.log('error = ' + response.statusCode)
    }
  })
})

app.listen(3000, function () {
  console.log('http://127.0.0.1:3000 app listening on port 3000!')
})
