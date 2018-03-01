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
      // console.log(result);
      if (bcrypt.compareSync(input.password, result.password) == false) {
        res.status(400)
        .json({
          msg: 'email or password did not match'
        })
      }
      let payload = {
        uid: result._id,
        username: result.username
      }
      // console.log(payload);
      jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
        if(!err){
          console.log(token);
          res.status(200)
          .json({
            msg: 'Logged in',
            token: token
          })
        } else {
          res.status(500)
          .json({
            msg: 'Failed',
            error: err
          })
        }
      })
    }).catch(err => {
      res.status(400)
      .json({
        msg: 'User not found',
        error: err
      })
    })
  }
}

module.exports = User;