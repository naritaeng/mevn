require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')
const token = process.env.bottk2
const bot = new TelegramBot(token, { polling: true })
const axios = require('axios')
const cheerio = require('cheerio')
const mongoose = require('mongoose')

const chatSchema = require('./ori.js')

bot.onText(/^!명령어/, (msg, match) => {
  const chatId = msg.chat.id
  //   const resp = match['input'] //메아리
  const resp = [
    '!불러오기-message_id',
    '!수정-message_id text내용',
    '!삭제-message_id',
    '안녕',
    '로또번호',
    '영화순위',
    '김소현',
    '이주빈',
    '위치'
  ]
  bot.sendMessage(chatId, resp)
})

/* Read */
bot.onText(/^!불러오기-(\d+)/, async (msg, match) => {
  const chatId = msg.chat.id
  const messageId = parseInt(match[1])

  try {
    const chatData = await chatSchema.findOne({ message_id: messageId })
    if (!chatData) {
      await bot.sendMessage(chatId, `${messageId} 없다`)
      return
    }

    const message = `Message ID: ${chatData.message_id}\n`
    const from = `From: ${chatData.from.first_name} ${chatData.from.last_name}\n`
    const date = `Date: ${chatData.date}\n`
    const text = `Text: ${chatData.text}\n\n`

    const chatInfo = message + from + date + text
    await bot.sendMessage(chatId, chatInfo)

    console.log('Read successful!')
  } catch (e) {
    console.log('Read failed', e)
    await bot.sendMessage(chatId, '실패!')
  }
})

/* Update */
bot.onText(/^!수정-(\d+)\s+(.+)/, async (msg, match) => {
  const chatId = msg.chat.id
  const messageId = parseInt(match[1])
  const updatedText = match[2]

  try {
    const chatData = await chatSchema.findOne({ message_id: messageId })
    if (!chatData) {
      await bot.sendMessage(chatId, `${messageId} 없다`)
      return
    }

    chatData.text = updatedText

    await chatData.save()
    console.log('Update successful!')
    await bot.sendMessage(chatId, '수정됐다이!')
  } catch (e) {
    console.log('Update failed', e)
    await bot.sendMessage(chatId, '실패!')
  }
})

/* Delete */
bot.onText(/^!삭제-(\d+)/, async (msg, match) => {
  const chatId = msg.chat.id
  const messageId = parseInt(match[1])

  try {
    const deletedData = await chatSchema.findOneAndDelete({
      message_id: messageId
    })
    if (!deletedData) {
      await bot.sendMessage(chatId, `${messageId} 없다`)
      return
    }

    console.log('Delete successful!')
    await bot.sendMessage(chatId, '삭제됐다이!')
  } catch (e) {
    console.log('Delete failed', e)
    await bot.sendMessage(chatId, '실패!')
  }
})

/* Create */
bot.on('message', async (msg) => {
  console.log(msg)
  if (msg.text.startsWith('!')) {
    // Skip saving the message
    return
  }
  try {
    const chatData = new chatSchema({
      message_id: msg.message_id,
      from: msg.from,
      chat: msg.chat,
      date: new Date(msg.date),
      text: msg.text
    })

    await chatData.save()
    console.log('save success!')
  } catch (e) {
    console.log('save failed', e)
  }
})

bot.onText(/^안녕/, (msg, match) => {
  const chatId = msg.chat.id
  //   const resp = match['input'] //메아리
  const resp = '난 별로'
  console.log(resp)
  bot.sendMessage(chatId, resp)
})

bot.onText(/^로또번호/, async (msg, match) => {
  const chatId = msg.chat.id
  axios
    .get(
      'https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q=%EB%A1%9C%EB%98%90'
    )

    .then((response) => {
      const $ = cheerio.load(response.data)
      const date = $('.date').text()
      const num = $('.lottonum').text()
      const ran = []
      for (let i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() * 45) + 1
        ran.push(random)
      }
      const result = `로또 번호\n날짜: ${date}\n번호: ${num}\n추천번호: ${ran};`
      bot.sendMessage(chatId, result)
    })
})

bot.onText(/^영화순위/, async (msg, match) => {
  const chatId = msg.chat.id
  try {
    const res = await axios.get(
      'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%98%81%ED%99%94%EC%88%9C%EC%9C%84'
    )
    const $ = cheerio.load(res.data)
    const movie = []

    $('.name').each(function () {
      movie.push($(this).text())
    })
    for (let i = 0; i < movie.length; i++) {
      if (i == 10) return movie
      await bot.sendMessage(chatId, `${i + 1}위 - ${movie[i]}`)
    }
    console.log(movie)
  } catch (e) {
    console.log(e)
  }
})

bot.onText(/^김소현/, (msg, match) => {
  const chatId = msg.chat.id
  const resp =
    'https://i.pinimg.com/originals/f5/48/57/f5485797a1df87f4dfc8f226b6c361b2.gif'
  console.log(resp)
  bot.sendAnimation(chatId, resp)
})
bot.onText(/^이주빈/, (msg, match) => {
  const chatId = msg.chat.id
  const resp =
    'https://i.pinimg.com/564x/d1/68/04/d168043b7e73ba159807c21c1cddde33.jpg'
  console.log(resp)
  bot.sendPhoto(chatId, resp)
})

bot.onText(/^위치/, async (msg) => {
  const chatId = msg.chat.id

  try {
    const location = await getCurrentLocation()
    const locationInfo = `현재 사용자는 위도: ${location.latitude.toFixed(
      3
    )}, 경도: ${location.longitude.toFixed(3)}에 위치하고 있습니다.;`
    bot.sendMessage(chatId, locationInfo)
  } catch (error) {
    console.error(error)
  }
})

async function getCurrentLocation() {
  try {
    const response = await axios.get('https://geolocation-db.com/json/')
    const { latitude, longitude } = response.data

    return { latitude, longitude }
  } catch (error) {
    throw new Error('위치 정보를 가져오는 중 오류가 발생했습니다.')
  }
}
