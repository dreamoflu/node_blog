const {
    login
} = require('../controller/user')
const { SucessModel, ErrorModel} = require('../model/resModel')
const { set } = require('../db/redis')

// 获取 cookie的过期时间
const getCookieExpires = () => {
    console.log('================')
    const d = new Date()
    d.setTime(d.getTime()+ (24*60*60*1000))
    console.log('toGMTString',d.toGMTString())
    return d.toGMTString()
}
const handleUserRouter = (req, res) => {
    const method = req.method
    // const url = req.url
    // const path = url.split('?')[0]
    // 登录接口
    if (method === 'POST' && req.path === '/api/user/login') {
        const { username, password } = req.body
        // const { username, password } = req.query   
        const result = login(username, password)
        return result.then(data=> {
            if(data.username) {
                // 操作cookie 
                // res.setHeader('Set-Cookie', `username = ${data.username}; path=/; httpOnly;expires=${getCookieExpires()}`)
                // 设置session
                req.session.username = data.username
                req.session.realname = data.realname
                // 同步到redis 中
               set(req.sessionId, req.session)
                 
                return new SucessModel()
            }
            return new ErrorModel('登录失败')
        })
    //   if(result) {
    //       return new SucessModel()
    //   }
    //   return new ErrorModel('登录失败')
    // }

   
    }
     // 登录验证的测试
     if(method === 'GET' && req.path === '/api/user/login-test') {
        //  console.log(req.cookie )
        if(req.session.username) {
            return Promise.resolve(new SucessModel({
                session: req.session
            })) 
        }
        return Promise.resolve(new ErrorModel('尚未登录')) 
    }

}
module.exports = handleUserRouter