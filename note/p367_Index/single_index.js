const mongoose = require('mongoose')
const Photo = require('./photo.js') // 인덱스 전
// const Photo = require('./photo_index.js') // 인덱스 후
// mongoose.set('useCreateIndex', true)
//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/my_database'
mongoose.set('strictQuery', false) // 필수 추가
const main = async () => {
  await mongoose
    .connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('connection succesful!'))
    .catch((err) => console.log(err))
  console.time('id를 오름차순으로 찾기')
  const ret = await Photo.find().sort({ id: 1 }).limit(100)
  console.timeEnd('id를 오름차순으로 찾기')
}
main()
