const axios = require('axios')
const { Telegraf } = require('telegraf')

const TELEGRAM_BOT_TOKEN = process.env.bottk2
const REST_API_KEY = process.env.gptkey

async function gptApi(prompt, max_tokens = 32, temperature, topP, n) {
  let rst = '생각중...'
  const url = 'https://api.openai.com/v1/chat/completions'
  const headers = {
    Authorization: 'Bearer ' + REST_API_KEY,
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
      ]
    },
    headers,
    responseType: 'json'
  }
  try {
    const response = await axios(options)
    rst = response.data.choices[0].message.content
    console.log(rst)
  } catch (error) {
    console.error(error)
  }
  return rst
}

const bot = new Telegraf(TELEGRAM_BOT_TOKEN)

bot.start((ctx) => {
  ctx.reply('안녕하세요! GPT-3.5 Turbo를 사용한 텔레그램 봇입니다.')
})

bot.on('text', async (ctx) => {
  const userMessage = ctx.message.text
  const gptResponse = await gptApi(userMessage)
  ctx.reply(gptResponse)
})

bot.launch()
