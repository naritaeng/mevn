/* async(promise 객체)에서 발생한 throw에러를 catch가 놓친 상황 */
async function testError() {
  console.log('에러 던지기를 시작합니다.')
  throw new Error('testError에서 에러를 고의 발생 시켰습니다.')
}

async function main() {
  try {
    console.log('=====try의 시작=====')
    await testError()
    console.log('=====try의 끝=====')
  } catch (e) {
    console.log('=====catch의 시작=====')
    console.log('=====catch의 끝=====')
  } finally {
    console.log('=====finally의 시작=====')
    console.log('에러테스트를 종료합니다.')
    console.log('=====finally의 끝=====')
  }
}

main()
