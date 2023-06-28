/* Promise는 reject로 예외 처리 할 수 있다 */
function promErr() {
  return new Promise((resolve, reject) => {
    reject('Promise의 예외 처리입니다.')
  })
}
const resultP = promErr().catch((e) => {
  console.log(e)
})
try {
  promErr()
} catch (e) {
  console.log(e, 'Promise rejected가 발생하였습니다.')
}
/* async는 throw로 예외 처리 할 수 있다. */
// async function asyncErr() {
//   throw 'async의 예외 처리입니다.'
//   console.log(new Date())
// }
// const resultA = asyncErr().catch((e) => {
//     console.log(e)
//   })
