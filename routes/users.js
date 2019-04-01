const Router = require('koa-router')
const UserController = require('../controller/user')

const router = new Router({
  prefix: '/api/users'
})

router.post('/create', UserController.createUser)
router.post('/query', UserController.queryUser)
router.post('/queryAll', UserController.queryAll)
router.post('/update', UserController.update)

module.exports = router