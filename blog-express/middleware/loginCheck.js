const { ErrorModel } = require('../model/resModel')
module.exports = (req,res,next) => {
    if(req.session.usrname) {
        next()
        return
    }
    res.json(
        new ErrorModel('未登录')
    )
}