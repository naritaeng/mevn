const pm = new promises((resolve, ruject) => {
  console.log('Website first Loading...')
  const what = Math.random < 0.5
  setTimeout(() => {
    if (what) {
      resolve('정상 연결 완료, 데이터를 정상적으로 송수신 하였습니다.')
    } else {
      reject(new Error('연결 문제가 생겼음, 통신이상'))
    }
  }, 2000)
})
pm.then((v) => console.log(v)) // 목표메세지 확인
  .catch((e) => console.log(e)) // 에러 캐치
  .finally(() => {
    console.log('통신이 종료됨') // 아무것도 받지않아도 됨
  })
