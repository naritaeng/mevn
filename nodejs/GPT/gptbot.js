const { Configuration, OpenAIApi } = require('openai')
const dotenv = require('dotenv')
const TelegramBot = require('node-telegram-bot-api')

// .env 파일에서 환경 변수 로드
dotenv.config()

// OpenAI API 키와 텔레그램 봇 토큰 가져오기
const gpt3ApiKey = process.env.gptkey
const telegramBotToken = process.env.bottk3

// OpenAI API 설정
const configuration = new Configuration({
  apiKey: gpt3ApiKey
})

// OpenAI API 클라이언트 생성
const openai = new OpenAIApi(configuration)

// 텔레그램 봇 생성
const bot = new TelegramBot(telegramBotToken, { polling: true })

// 텔레그램 봇이 메시지를 수신하면 처리하는 이벤트 핸들러
bot.on('message', async (msg) => {
  const chatId = msg.chat.id
  console.log(msg)

  const text = msg.text

  try {
    // GPT-3.5를 사용하여 응답 생성
    const answer = await gpt3(text)

    // 텔레그램 봇에 응답 보내기
    bot.sendMessage(chatId, answer)
  } catch (error) {
    console.error('Error:', error.message)
    bot.sendMessage(chatId, '....')
  }
})

// GPT-3.5를 사용하여 응답 생성하는 비동기 함수
async function gpt3(text) {
  const pmt = text
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: '10대 여성 말투'
      },
      {
        role: 'system',
        content: '여행을 좋아함'
      },
      {
        role: 'user',
        content: pmt
      }
    ]
  })

  const answer = response.data.choices[0].message.content
  return answer
}
