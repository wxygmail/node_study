/*
 * @Description: 数据库配置
 * @Author: WuXiaoyan
 * @Date: 2022-07-21 11:01:24
 * @LastEditors: WuXiaoyan
 * @LastEditTime: 2022-07-21 11:01:24
*/

const {Sequelize} = require('sequelize')
const config = require('../config/config.default')
const req = new Sequelize(config.MYSQL_DB, config.MYSQL_USER, config.MYSQL_PSW, {
  host: config.MYSQL_HOST,
  dialect: 'mysql'
})
module.exports = req
