/*
 * @Description: 控制层 获取用户的数据写入数据库
 * @Author: WuXiaoyan
 * @Date: 2022-07-21 11:01:42
 * @LastEditors: WuXiaoyan
 * @LastEditTime: 2022-07-21 11:01:42
*/

const {
  createUser
} = require('../service/user')

class UserController {
  /**
   * 用户注册
   * @param ctx
   * @param next
   * @return {Promise<void>}
   */
  async register(ctx, next) {
    const {user_name, password} = ctx.request.body
    // 获取数据
    //返回结果
    const userResult = await createUser({user_name, password})
    console.log(123)
    ctx.body = {
      code: 0,
      message: '用户注册成功',
      data: userResult
    }
  }

  async login(ctx, next) {
    ctx.body = '用户登录'
  }
}

module.exports = new UserController()
