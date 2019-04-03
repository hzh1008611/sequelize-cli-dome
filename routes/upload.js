const Router = require('koa-router')
const UploadController = require('../controller/upload')

const router = new Router({
  prefix: '/api'
})

router.post('/upload', UploadController.uploadFile)

module.exports = router