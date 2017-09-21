const fs = require('fs')
const aws = require('aws-sdk')
const s3 = new aws.S3({
  apiVersion: '2006-03-01'
})

const buffer = fs.readFileSync('producer.js') // 업로드 할 파일

s3.upload({
  ACL: 'public-read', // 익명의 사용자도 파일 경로만 알면 읽기 가능하도록 설정
  Body: buffer,
  Bucket: 'wpsn-s3-hsootree',
  Key: 'producer.js',
  ContentDisposition: 'inline', // Content-Disposition 헤더
  ContentType: 'text/javascript' // Content-Type 헤더
}, (err, data) => {
  console.error(err)
  console.log(data.Location)
})