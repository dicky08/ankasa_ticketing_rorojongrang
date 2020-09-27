const jwt = require('jsonwebtoken')

module.exports = {
    authenticate: (req,res, next) => {
        const {token} = req.headers
        if(!token) {
            res.send({
                message: "token harus diisi"
            })
        } else {
            next()
        }
    },
    authorisation: (req,res,next) => {
        const token = req.headers
        jwt.verify(token, process.env.JWT_PRIVATE, function(err, decode) {
            if(err) {
                res.status(405).send({
                    message: "gagal authenticate"
                })
            } else {
                next()
            }
        });
    }
}