const user = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class User {
  static signUp (req,res){
    let input = {
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(10))
    }
    user.create({
      username: input.username,
      email: input.email,
      password: input.password
    }).then(result => {
      res.status(200)
      .json({
        msg: 'User registered',
        user: result
      })
    }).catch(err => {
      res.status(500)
      .json({
        msg: 'Failed',
        error: err
      })
    })
  }
  
  static signIn (req,res){
    let input = {
      username: req.body.username,
      password: req.body.password
    }
    user.findOne({
      username: input.username
    }).then(result => {
      console.log(result);
    })
  }
}

module.exports = User;