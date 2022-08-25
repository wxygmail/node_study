/*
 * @Description: 用户模型 数据库定义
 * @Author: WuXiaoyan
 * @Date: 2022-07-21 11:04:29
 * @LastEditors: WuXiaoyan
 * @LastEditTime: 2022-07-21 11:04:29
*/
const {DataTypes} = require('sequelize')
const seq = require('../db/seq')

const UserModel = seq.define('user_tb', {
//  用户名
  user_name: {
    type: DataTypes.STRING,
    //allowNull: false // 默认为true
    unique: true, // 唯一,
    comment: '用户名唯一'  // 注释
  },
  // 密码
  password: {
    type: DataTypes.CHAR(32),
    comment: '密码'
  },
  is_admin: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
    comment: '是否为管理员，0：不是，1：是'
  }
})
// force 强制创建数据表 同步数据库
// UserModal.sync({ force: true })
module.exports = UserModel
