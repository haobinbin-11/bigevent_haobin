// 因为我们注册成功后存入数据库中的密码是明文为了安全需要加密
// 导入加密模块 密码相对安全
const utility = require('utility');
// 导入express
const express = require('express');
// 导入CORS
const cors = require('cors');
// 导入path内置模块
const path = require('path');
// 导入login_router  中路由
const login_router = require(path.join(__dirname,'router/login_router.js'));
// 创建服务器实例化对象
const app = express();
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json()) // for parsing application/json
// 监听端口
app.listen(5555,()=>{
    console.log('服务器启动....');
})
// 设置中间件
// 设置路由
app.use('/api',login_router)
