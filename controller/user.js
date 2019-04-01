const User = require('../models/index').Users

module.exports = class userController {
  //创建用户
  static async createUser (ctx) {
    const req = ctx.request.body
    if (req.sex && req.email && req.name && req.age) {
      try {
        await User.create({
          sex: req.sex,
          email: req.email,
          age: req.age,
          name: req.name
        })
        ctx.body = {
          code: 200,
          msg: '创建成功',
        }
      } catch (err) {
        ctx.body = {
          code: 500,
          msg: '服务器内部错误',
          err: err
        }
      }
    } else{
      ctx.body = {
        code: -1,
        msg: '参数不全'
      }
    } 
  }
  // 根据id查询用户
  static async queryUser (ctx) {
    const req = ctx.request.body
    if (req.id) {
      try {
        const data = await User.findOne({
          id: req.id
        })
        ctx.body = {
          code: 200,
          msg: '查询成功',
          data: [data]
        }
      } catch (err) {
        ctx.body = {
          code: 500,
          msg: '服务器错误'
        }
      }
    } else{
      ctx.body = {
        code: -1,
        msg: '参数不全'
      }
    }
  }
  // 查询所有用户
  static async queryAll (ctx) {
    try {
      const data = await User.findAll()
      ctx.body = {
        code: 200,
        msg: '查询成功',
        data: data
      }
    } catch (err) {
      ctx.body = {
        code: 500,
        msg: '服务器错误'
      }
    }
  }
  // 根据id更新用户
  static async update (ctx) {
    const req = ctx.request.body
    if (req.name && req.age && req.email && req.sex && req.id) {
      try {
        await User.update({
          name: req.name,
          sex: req.sex,
          email: req.email,
          age: req.age
        }, {
          where: {
            id: req.id
          }
        })
        ctx.body = {
          code: 200,
          msg: '更新成功'
        }
      } catch (err) {
        ctx.body = {
          code: 500,
          msg: '服务器错误'
        }
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '参数不全'
      }
    }
  }
}