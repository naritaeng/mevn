const Schema_ori = require('./CRUD_ori.js')

const main = async () => {
  const t = await Schema_ori.find(
    {
      title: { $eq: '홍길동' }
    },
    { _id: 0 }
  ).lean() // p349 설명 효율적 메소드
  console.log(t)
}
main()
