const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "need username"],
    unique: [true, "username already taken"]
  }
  password: {
    type: String,
    required: [true, "need password"]
  }
},{
  timestamps: true
});

var User = mongoose.model('User', userSchema);

module.exports = User;