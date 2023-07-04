/* 정상적인 처리일때 */
function test(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof text === 'string'
        ? resolve('스트링입니다.')
        : reject('파악이 안됩니다.')
    }, time)
    console.log(text)
  })
}

/* PromiseAll 처리 */
const testGo = async () => {
  console.time('일반 비동기처리')
  await test('코딩', 2500)
  await test('Coding', 2000)
  await test('1314111', 1700)
  await test('자바스크립트', 1000)
  console.timeEnd('일반 비동기처리')
}
testGo()
