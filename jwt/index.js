const jwt = require('jsonwebtoken')

const SERECT = "Lgowen"

  /** 
    * 创建 Token 
    * @param {Object} content 要生成token的主题信息
    */ 
const createToken = function (content) {
    return jwt.sign(content, SERECT, {
        expiresIn: 60 * 60 * 24  // 一天过期
    })
}

 /** 
    * 校验 Token 
    * @param {Object} content 要生成token的主题信息
    */ 
const validateToken = function (req, res, next) {
 // 获取请求头中的Authorization认证字符
 console.log(req)
 const authorization = req.get('Authorization')
 console.log(authorization)
 // 排除不需要授权的路由
 if(req.path === '/api/comment') {
    jwt.verify(authorization, SERECT, function (err, decode) {
        if (err) {  //  认证出错
            console.log('出错了');
          res.status(403).send('认证无效，请重新登录。');
        } else {
            console.log('继续了');
          next();
        }
    })
  }
} 

module.exports = {
    createToken,
    validateToken
}