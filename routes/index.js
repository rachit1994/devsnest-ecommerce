var express = require('express');
var router = express.Router();
var registerInitialCheck = require('../middlewares/registerChecks');
var register = require("../controllers/register")
/* GET home page. */
router.get('/', function(req, res, next) {
  const sess = req.session;
  sess.username = 'rachit';
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res) {
  res.render('index', { title: JSON.stringify(req.session.user) })
})

/**
 * @requires { email, password, confirmPasswrod } - req.body
 * @description
 */
router.post('/register', registerInitialCheck, register);

module.exports = router;
