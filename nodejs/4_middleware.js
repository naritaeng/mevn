const express = require('express')
const app = express()
const port = 3000

// ---1번 로직
app.use((req, res, next) => {
    console.log('1 Time:', Date.now())
    next()
})
app.use((req, res, next) => {
    // 2번 로직
    console.log('2 Time:', Date.now())
    next()
})

app.listen(port, () => {
  console.log(`서버가 생성되었습니다. ${port}`)
})

/*
서버가 생성되었습니다. 3000
1 Time: 1686795860805
2 Time: 1686795860806
*/