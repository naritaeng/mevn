const Schema_ori = require('./CRUD_ori.js')

const main = async () => {
  const _data = {
    albumId: 12012,
    id: 123,
    title: '슈퍼맨',
    url: 'naver.com',
    thumbnailUrl: 'https://daum.net'
  }

  const CRUD_C = new Schema_ori(_data)
  const t = await CRUD_C.save()
  console.log(t)
}
main()
