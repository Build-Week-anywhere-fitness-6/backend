const bcrypt = require("bcryptjs/dist/bcrypt");
const { 
  validatePassword, 
  validateUsername,
  checkUsernameExists } = require("./auth-middleware");
  const bcrypt = require('bcryptjs');
  const Users = require('./auth-model')

const router = require("express").Router();

router.post('/login', validatePassword, validateUsername, (req, res) => {
    if (bcrypt.compareSync(req.body.password, req.user.password)) {
        const token = buildToken(req.user)
        res.status(200).json({message:`${req.user.username} is back!`, token})
    } else {
        next({status:401, message:'Invalid credentials'})
    } 
})


router.post('/register', checkUsernameFree,  (req, res) => {
    
  const { username, password } = req.body

  const hash = bcrypt.hashSync(password, 8)
  Users.add({ username, password: hash, role_name: req.role_name})
  .then(newUser => {
    res.status(201).json(newUser)
  })
    res.status(500).json({message: 'New User could not be made'})
  
})

router.get('/logout', (req, res) => {
  if (req.session.user) {
    req.session.destroy((err) => {
      if (err) {
        res.json({
          message: 'you cannot leave!'
        })
      } else {
        // set a cookie in the past
        res.json({
          message: 'logged out'
        })
      }
    })
  } else {
    res.json({
       message: 'no session'
    })
  }
})

function buildToken (user) {
    const payload = {
      username: user.username,
      role: user.role
    }
    const options = {
      expiresIn: '1d'
    }
    const token = jwt.sign(
      payload,
      JWT_SECRET,
      options,
    )
    return token
  }

module.exports = router;