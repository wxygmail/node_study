```angular2html
nodemon 监听文件变化，自动重启我们的服务

dotenv 读取我们的配置文件

@koa/router 路由

koa-body 解析请求体(请求数据)
```
**目录说明**
```
app -- 注册使用

config -- 配置文件

controller -- 控制器

router -- 路由

service -- 主要做数据库处理操作

main.js -- 入口文件
```
```angular2html
**使用说明**
启动项目：npm run dev
1、postman 测试接口可用性
2、docker 启动数据库
**进入数据库：**
1、docker exec -it koa-web-db bash
2、mysql -u root -p

```
```angular2html
报错解决：
UnhandledPromiseRejectionWarning: 
SequelizeAccessDeniedError:
Access denied for user ''@'172.17.0.1' (using password: YES)

解决方法：alter user 'root'@'%' identified by '123456';
```
