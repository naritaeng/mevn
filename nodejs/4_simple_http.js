const http = require('http')
const PORT = 3000
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    res.write('첫번째 wirte')
    res.write('두번째 wirte')
    res.end('전송 끝')
    // res.send('send 전송 끝1')
})
server.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`)
})
