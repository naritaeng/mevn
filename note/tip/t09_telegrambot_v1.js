require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')
const token = process.env.bottk
const bot = new TelegramBot(token, { polling: true })

const axios = require('axios')
const cheerio = require('cheerio')

const url =
  'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%9D%8C%EC%95%85%EC%88%9C%EC%9C%84'

bot.onText(/^안녕/, (msg, match) => {
  const chatId = msg.chat.id
  //   const resp = match['input'] //메아리
  const resp = '난 별로'
  console.log(resp)
  bot.sendMessage(chatId, resp)
})

bot.onText(/^이름이뭐야/, (msg, match) => {
  const chatId = msg.chat.id
  //   const resp = match['input'] //메아리
  const resp = '알빠가'
  console.log(resp)
  bot.sendMessage(chatId, resp)
})

bot.onText(/^잘가/, (msg, match) => {
  const chatId = msg.chat.id
  //   const resp = match['input'] //메아리
  const resp = '싫다'
  console.log(resp)
  bot.sendMessage(chatId, resp)
})
bot.onText(/^음악차트/, async (msg, match) => {
  const chatId = msg.chat.id

  try {
    const res = await axios.get(url)
    const $ = cheerio.load(res.data)
    const song = []

    $('.tit_area').each(function () {
      song.push($(this).text())
    })

    for (let i = 0; i < song.length; i++) {
      await bot.sendMessage(chatId, `${i + 1}위 - ${song[i]}`)
    }

    console.log(song)
  } catch (error) {
    console.error(error)
  }
})
bot.onText(/^카리나/, (msg, match) => {
  const chatId = msg.chat.id
  //   const resp = match['input'] //메아리
  const resp =
    'https://i.pinimg.com/originals/9d/5b/ce/9d5bceda49a7a13af8d6ce52636d0ca3.gif'
  console.log(resp)
  bot.sendAnimation(chatId, resp)
})
bot.onText(/^이주빈/, (msg, match) => {
  const chatId = msg.chat.id
  //   const resp = match['input'] //메아리
  const resp =
    'AgACAgUAAxkBAAOjZKO_xtIkO6EDpvLNZWO4Bf3S_hcAAoa0MRvbNBhVhvivJfCKcB4BAAMCAAN4AAMvBA'
  console.log(resp)
  bot.sendPhoto(chatId, resp)
})
bot.onText(/^자기야/, (msg, match) => {
  const chatId = msg.chat.id
  //   const resp = match['input'] //메아리
  const resp =
    'AgACAgUAAxkBAAOkZKO_9OrgIcod_scpTEBgjgjnhXQAAoi0MRvbNBhVm32fzko2oGsBAAMCAANtAAMvBA'
  console.log(resp)
  bot.sendPhoto(chatId, resp)
})
bot.onText(/^배고파/, (msg, match) => {
  const chatId = msg.chat.id
  //   const resp = match['input'] //메아리
  const resp =
    'AgACAgUAAxkBAAOlZKPALH0zNNg4rjUKzJT3bvxerC0AAom0MRvbNBhVbjf4YTlEfx4BAAMCAAN4AAMvBA'
  console.log(resp)
  bot.sendPhoto(chatId, resp)
})
bot.onText(/^트월킹/, (msg, match) => {
  const chatId = msg.chat.id
  //   const resp = match['input'] //메아리
  const resp =
    'https://i.pinimg.com/originals/c6/28/2b/c6282bbd18bbd8f39d4883cc56b92f99.gif'
  console.log(resp)
  bot.sendAnimation(chatId, resp)
})
bot.onText(/^어지러워/, (msg, match) => {
  const chatId = msg.chat.id
  //   const resp = match['input'] //메아리
  const resp =
    'https://i.pinimg.com/originals/51/5a/4e/515a4e80549b610821e378cf08462c59.gif'
  console.log(resp)
  bot.sendAnimation(chatId, resp)
})
bot.on('message', (msg) => {
  const chatId = msg.chat.id
  console.log(msg)
})
