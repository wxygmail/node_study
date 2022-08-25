const Koa = require('koa')
const app = new Koa()
const koaBody = require('koa-body')
const router = require('../router/user')
app.use(koaBody())
app.use((router.routes()))
module.exports = app
