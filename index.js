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
// 监听端口
app.listen(5555,()=>{
    console.log('服务器启动....');
})
// 设置路由
app.use('/api',login_router)
