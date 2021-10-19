const router = require("express").Router();

router.post('/login', (req, res) => {
    res.send('this is a login page') 
})


router.post('/register', (req, res) => {
    res.send('this is a register page') 
})

router.get('/logout', (req, res) => {
    res.send('this is a logout page') 
})


module.exports = router;