const { validatePassword, validateUsername } = require("./fitness-middleware");

const router = require("express").Router();

router.post('/login', validatePassword, validateUsername, (req, res) => {
    if (bcrypt.compareSync(req.body.password, req.user.password)) {
        const token = buildToken(req.user)
        res.status(200).json({message:`${req.user.username} is back!`, token})
    } else {
        next({status:401, message:'Invalid credentials'})
    } 
})


router.post('/register', (req, res) => {
    res.send('this is a register page') 
})

router.get('/logout', (req, res) => {
    res.send('this is a logout page') 
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