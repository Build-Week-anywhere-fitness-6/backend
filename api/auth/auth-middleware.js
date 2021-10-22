const jwt = require('jsonwebtoken')
const Users = require('./auth-model')


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

    const checkUsernameFree = async (req, res, next) => {

        const name = req.body.username
        const users = await Users.find()
        const exists = users.find( user => user.username === name)
        if(exists){
          res.status(422).json({message: "Username taken" })
        } else {
          next()
        }
      }

      const checkUsernameExists = async (req, res, next) => {
      
        try {
          const user = await Users.findBy({ username: req.body.username }).first()
          
          if (!user) {
      
            res.status(401).json({ message: "Invalid credentials" })
      
          } else {
      
            req.user = user
            next()
          }
      
        } catch (err) {
      
          next(err)
      
        }
      
      }

module.exports = {
    checkUsernameExists, restricted, only, validatePassword, validateUsername, checkUsernameFree
}