const jwt = require('jsonwebtoken')
const { findBy } = require('../api/fitness-model')

const restricted = async (req, res, next) => {
    const token = req.headers.token

    if (!token) {
        return next({status:401, message:'token required'})
    } else {
        jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
            if(err) {
                next({status:401, message:'token invalid'})
            } else {
               req.decodedToken = decodedToken
               next() 
            }
        })        
    }
}

const only = (role) => (req, res, next) => {
    if (role === req.decodedToken.role) {
        next()
    } else {
        next({status:403, message:'admins only'})
    }
}

const validatePassword = (req, res, next) => {
    const password = req.body.password.trim()

    if (!password) {
        next({status:422, message:'username and password required'})
    } else if (password.length < 6) {
        next({status:422, message:'password must be at least 6 characters'})
    }else {
        next()
    }
}

const validateUsername = async (req, res, next) => {
    const username = req.body.username.trim()

    if (!username) {
        next({status:422, message:'username and password required'})
    }

    try {
        const [found] = await findBy({ username: req.body.username })
    
        if (!found) {
            next({status:401, message:'invalid credentials'})
        } else {
            req.user = found
            next()
        } 
        } catch(err) {
            next(err)
        }    
    }
}

module.exports = {
    checkUsernameExists, restricted, only, validatePassword, validateUsername
}