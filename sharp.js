const fs = require('fs')

const sharp = require('sharp')

const buffer = fs.readFileSync('southgate_hs.jpg')

sharp(buffer) // 파일 이름대신 bugger 입력
  .resize(200, 200)
  .crop(sharp.gravity.center)
  .toFile('thumbnail.png', (err, info) => {
    console.log(info)
  })