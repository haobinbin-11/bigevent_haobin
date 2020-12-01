/*
*   拆解独立的路由模块
*/
// 因为我们注册成功后存入数据库中的密码是明文为了安全需要加密
// 导入加密模块 密码相对安全
const utility = require('utility');

const path = require('path')
const express = require('express');
// 拆分路由模块  将路由添加到router对象上
// 在入口文件中通过app.use方法把router中的路由配置到全局
const router = express.Router();
// 导入操作数据库模块
const db = require(path.join(__dirname,'../common.js'));
// 实现注册端口
router.post('/reguser',async (req,res)=>{
    req.body.password = utility.md5(req.body.password) // 使用utility.md5() 方法 
    let params = req.body; // 获取前端请求携带的参数
    console.log(req.body);
    // 1. 判断参数是否为null
    if(!params.username){
        res.send({
            status : 401,
            message : '用户名不能为空'
        })
        return 
    }
    if(!params.password){
        res.send({
            status : 402,
            message : '密码不能为空'
        })
    }
    // 判断数据库中是否有该注册的用户
    let csql = 'select id from bigevenDB where username = ?'  // 查询前端传来的数据username 的id 如果有提示错误 并return
    let cflag = await db.getInfo(csql,params.username);
    if(cflag && cflag.length >0){
        res.send({
            status : 300,
            message : '该用户名已被注册'
        })
        return
    }



    // 存在优化
    let sql = 'insert into bigevenDB set ?'; 
    // 操作数据库
    var flag = await db.getInfo(sql,params); // 定义操作后的状态 是否成功
    if(flag && flag.affectedRows > 0){
        res.send({  // 响应给前端
            status : '200',
            messges : '注册成功'
        })
    }
    else{
        res.send({
            status : '400',
            message : '注册失败'
        })
    }
})
module.exports = router