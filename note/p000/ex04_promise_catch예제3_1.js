/* Promise에서 방생한 reject를 catch가 놓친상황 */
function testError() {
  console.log('에러 던지기를 시작합니다.')
  return new Promise((resolve, reject) =>
    resolve(console.log('제가 표시한 에러입니다.'))
  )
}

function main() {
  try {
    console.log('=====try의 시작=====')
    testError()
    console.log('=====try의 끝=====')
  } catch (e) {
    console.log('=====catch의 시작=====')
    console.log('=====catch의 끝=====')
  } finally {
    console.log('=====finally의 시작=====')
    console.log('=====finally의 끝=====')
  }
}

main()
