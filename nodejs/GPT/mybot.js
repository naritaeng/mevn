require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')
const token = '5813670487:AAHCqITYcWT2-qMjRgcPuxvQulcmb1YMYMs'
const bot = new TelegramBot(token, { polling: true })
const mongoose = require('mongoose')
const axios = require('axios')

const gptApiKey = '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'
const USER = process.env.dbid
const PWD = process.env.dbpw
const HOST = process.env.dbhost
const DB = process.env.db
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`

async function gptApi(prompt) {
  let rst = ''
  const url = 'https://api.openai.com/v1/chat/completions'
  const headers = {
    Authorization: 'Bearer ' + gptApiKey,
    'Content-Type': 'application/json'
  }
  const options = {
    url,
    method: 'POST',
    data: {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 150, // 원하는 최대 토큰 수를 설정 (기본값: 150)
      temperature: 1.5, // 응답 다양성을 조절하는 온도 (기본값: 1.0, 높을수록 더 다양한 응답)
      topP: 1.0, // 샘플링의 상위 확률 경계 (기본값: 1.0)
      n: 1 // 생성할 응답의 수 (기본값: 1)
    },
    headers,
    responseType: 'json'
  }

  try {
    const response = await axios(options)
    rst = response.data.choices[0].message.content
  } catch (error) {
    console.error(error)
  }
  return rst
}

mongoose.set('strictQuery', false) // 권장사항 추가

mongoose
  .connect(mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connection successful!!'))
  .catch((e) => console.log(e))

const Schema = mongoose.Schema
const Chat = new Schema({
  message_id: Number,
  from: {
    first_name: String,
    last_name: String
  },
  date: { type: Date, dafault: Date.now, required: true },
  text: String
})

const chatSchema = mongoose.model('mybot', Chat, 'mybot')

bot.onText(/^명령어/, (msg) => {
  const chatId = msg.chat.id
  const resp = `   !불러오기-message_id,
  !수정-message_id text내용,
  !삭제-message_id,
  !전체삭제,
  안녕,
  이주빈`
  bot.sendMessage(chatId, resp)
})

/* Create */
bot.on('message', async (msg) => {
  console.log(msg)
  try {
    if (msg.text.startsWith('!')) return
    const KST = new Date(new Date().getTime() + 9 * 60 * 60 * 1000)
    const chatData = new chatSchema({
      message_id: msg.message_id,
      from: msg.from,
      chat: msg.chat,
      date: KST,
      text: msg.text
    })
    const userMessage = msg.text
    const gptResponse = await gptApi(userMessage)
    bot.sendMessage(msg.chat.id, gptResponse)
    await chatData.save()
    console.log('save success!')
  } catch (e) {
    console.log('save failed', e)
  }
})

/* Read */
bot.onText(/^!불러오기-(\d+)/, async (msg, match) => {
  const chatId = msg.chat.id
  const messageId = parseInt(match[1])

  try {
    const KST = new Date(new Date().getTime() + 9 * 60 * 60 * 1000)

    const chatData = await chatSchema.findOne({ message_id: messageId })
    if (!chatData) {
      await bot.sendMessage(chatId, `${messageId} 없다`)
      return
    }

    const message = `Message ID: ${chatData.message_id}\n`
    const from = `From: ${chatData.from.first_name} ${chatData.from.last_name}\n`
    const date = `Date: ${KST}\n`
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

bot.onText(/^!전체삭제/, async (msg) => {
  const chatId = msg.chat.id
  await bot.sendMessage(
    chatId,
    '저장되어 있는 데이터 모두를 삭제할래? (네/아니오)'
  )
  bot.once('message', async (confirmationMsg) => {
    const confirmation = confirmationMsg.text.toLowerCase()
    if (confirmation === '네') {
      try {
        await chatSchema.deleteMany({})
        console.log('All data deleted!')
        await bot.sendMessage(chatId, '데이터 모두 삭제됨.')
      } catch (e) {
        console.log('delete failed', e)
        await bot.sendMessage(chatId, '데이터 삭제 실패!')
      }
    } else {
      await bot.sendMessage(chatId, '삭제 취소됨.')
    }
  })
})

bot.onText(/^이주빈/, (msg, match) => {
  const chatId = msg.chat.id
  const resp =
    'https://i.pinimg.com/564x/d1/68/04/d168043b7e73ba159807c21c1cddde33.jpg'
  console.log(resp)
  bot.sendPhoto(chatId, resp)
})
