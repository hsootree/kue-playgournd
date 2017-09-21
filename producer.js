const kue = require('kue')
const queue = kue.createQueue()
  /* 작업 큐 설정 */
setInterval(() => {
  queue.create('my-job', { message: 'hello kue!' })
    .removeOnComplete(true)
    .save()
}, 1000)