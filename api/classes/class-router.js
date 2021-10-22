const router = require("express").Router();
const Classes = require('./class-model')
const { restricted, only } = require('../auth/auth-middleware')

router.get('/', (req, res, next) => {
    Classes.find()
    .then(classes => res.json(classes))
    .catch(next)    
})

router.get("/:class_id", (req, res, next) => { // done for you
    Classes.findById(req.params.class_id)
      .then(workout => res.json(workout))
      .catch(next);
  });

router.put("/:class_id", (req, res, next) => {
    Classes.update(req.body)
    .then()
    .catch(next)
})

module.exports = router;