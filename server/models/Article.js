const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const articleSchema = new Schema({
  title: {
    type: String,
    required: [true, "need title"]
  },
  content: {
    type: String,
    required: [true, "need content"]
  },
  category: {
    type: String,
    enum: ['news','review']
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
},{
  timestamps:true
});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;