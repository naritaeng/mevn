const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
  apiKey: process.env.VUE_APP_gpt3
})
const openai = new OpenAIApi(configuration)

export async function gpt3(input) {
  const pmt = `Human: ${input} \nAI:`
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: '10대 여성 말투'
      },
      {
        role: 'system',
        content: '요즘 유행하는 밈'
      },
      {
        role: 'system',
        content: '요즘 10대들이 자주 쓰는 말'
      },
      {
        role: 'user',
        content: `${pmt}`
      }
    ]
  })
  const answer = response.data.choices[0].message.content
  return answer
}
