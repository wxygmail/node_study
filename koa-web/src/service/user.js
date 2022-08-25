/*
 * @Description: 服务层
 * @Author: WuXiaoyan
 * @Date: 2022-07-21 11:02:15
 * @LastEditors: WuXiaoyan
 * @LastEditTime: 2022-07-21 11:02:15
*/
const UserModel = require('../model/user-model')

class UserService {
  async createUser(data = {}) {
    const {user_name, password} = data
    // 写入数据库
    const {dataValues = {}} = await UserModel.create({user_name, password, is_admin: 1})
    return dataValues
  }
}

module.exports = new UserService()
