require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const path = require('path')
const VSchema = require('./mdb.cjs')
const app = express()
const _path = path.join(__dirname, './dist')
/* POST를 위한 구문 */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
/* 스태틱 경로 */
app.use('/', express.static(_path))
/* 로그 INFO */
app.use(logger('tiny'))

/* ===== MongoDB CRUD ===== */
/* CRUD에서 Create */
app.post('/dbc', (req, res) => {
  const title = req.body.title
  const content = req.body.content
  const date = req.body.date
  ;(() => {
    const _data = { title, content, date }
    new VSchema(_data).save()
    res.send('입력완료')
  })()
})

/* CRUD에서 Read */
app.get('/dbr/:date', (req, res) => {
  const date = req.params.date
  const read = () => {
    VSchema.findOne({ date }, { _id: 0, __v: 0 })
      .then((rst) => {
        res.send(rst)
        console.log(rst)
      })
      .catch((e) => console.log(e))
  }
  read()
})
/* CRUD에서 Delete */
// app.get('/dbd/:date', (req, res) => {
//   const date = req.params.date
//   const Delete = () => {
//     VSchema.deleteOne({ date }, { _date })
//       .then((rst) => {
//         res.send(rst)
//         console.log(`${rst} 삭제완료!`)
//       })
//       .catch((e) => console.log(e))
//   }
//   Delete()
// })

app.delete('/dbd/:date', (req, res) => {
  const date = req.params.date
  const deleteData = () => {
    VSchema.deleteOne({ date })
      .then((result) => {
        if (result.deletedCount > 0) {
          res.send('데이터가 삭제되었습니다.')
        } else {
          res.send('해당 날짜의 데이터를 찾을 수 없습니다.')
        }
        console.log(`${result} 삭제완료!`)
      })
      .catch((error) => console.log(error))
  }
  deleteData()
})

app.listen(3000, () => {
  console.log('3000포트에서 서버 동작중...')
})
