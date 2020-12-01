// 导入mysql模块
var mysql = require('mysql');
function getInfo(sql,param){
    // 使用promise来处理数据库操作
    return new Promise((resolve, reject)=>{
         // 创建连接
        var db = mysql.createConnection({
            // 主机ip地址
            host : 'localhost',
            // 端口
            port : 3306,
            // 数据库名称
            database : 'test',
            // 用户名
            user : 'root',
            // 密码
            password : 'root'
        })
        // 执行连接
        db.connect();
        // 对数据库进行操作
        db.query(sql,param,(err,result)=>{
            if(err){
                return reject(err);
            }
            resolve(result);
        })
        // 关闭连接
        db.end()
    })
}


// 导出
module.exports = {
    getInfo : getInfo
}