/*
*   拆解独立的路由模块
*/
const express = require('express');
// 拆分路由模块  将路由添加到router对象上
// 在入口文件中通过app.use方法把router中的路由配置到全局
const router = express.Router();

router.get('/get',(req,res)=>{
    res.send('get')
})
router.post('/post',(req,res)=>{
    res.send(post);
})
module.exports = router