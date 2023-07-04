const async = (message, ret) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(message)
      console.log(new Date())
      resolve(ret)
    }, 2000)
  })
}

const promises = [async('비동기함수1발동', 1), async('비동기함수2발동', 2)]

Promise.all(promises).then((data) => {
  console.log(data)
})

/*
비동기함수1발동
2023-06-30T01:27:22.049Z
비동기함수2발동
2023-06-30T01:27:22.054Z
[1,2]
*/
