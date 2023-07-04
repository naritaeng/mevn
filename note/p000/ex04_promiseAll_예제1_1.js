/* 정상적인 */
function test(text, time) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      typeof text === 'string'
        ? reslove('스트링입니다.')
        : reject('파악이 안됩니다.')
    }, time)
    console.log(text)
  })
}

/* 일반 비동기처리 */
const testGo = async () => {
  console.time('일반 비동기처리')
  await test('코딩', 2500)
  await test('Coding', 2000)
  await test('자바스크립트', 1000)
  await test('Javascript', 1700)
  console.timeEnd('일반 비동기처리')
}
testGo()
