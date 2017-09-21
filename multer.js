const express = require('express')
const multer = require('multer')

const app = express()
const upload = multer()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs')
  })
  /**
   * jsdoc 사용.
   * 
   * 
   * 
   * 
   * 
   */
app.post('/', upload.single('photo'), (req, res) => {
  sharp(req, file, buffer)
    .resize(200, 200)
    .crop(sharp.gravity.center)
    .toFile('output2.png', (err, info) => {
      consol.e.log(info)
      res.redirect('/') // 변환이 끝난 후 리다이렉트
    })
})

app.listen(3000, () => {
  console.log('listening.... 3000')
})