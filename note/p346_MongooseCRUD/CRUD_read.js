const Schema_ori = require('./CRUD_ori.js')

const main = async () => {
  const t = await Schema_ori.find(
    {
      title: { $eq: '홍길동' }
    },
    { _id: 0 }
  ).lean()
  console.log(t)
}
main()
