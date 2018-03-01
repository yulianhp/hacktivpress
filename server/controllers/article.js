const article = require('../models/Article');

class Article {
  static createOne(req,res){
    let input = {
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      author: req.body.author
    }
    article.create({
      title: input.title,
      content: input.content,
      category: input.category,
      author: input.author
    }).then(result => {
      res.status(200)
      .json({
        msg: 'Article added',
        article: result
      })
    }).catch(err => {
      res.status(500)
      .json({
        msg: 'Failed',
        error: err
      })
    })
  }
  
  static getAll(req,res){
    article.find()
    .then(result => {
      res.status(200)
      .json({
        msg: 'List of all articles',
        articles: result
      })
    }).catch(err => {
      res.status(500)
      .json({
        msg: 'Cant get all articles',
        error: err
      })
    })
  }
  
  static getByUser(req,res){
    article.find()
    .then(result => {
      res.status(200)
      .json({
        msg: 'List of users articles',
        articles: result
      })
    }).catch(err => {
      res.status(500)
      .json({
        msg: 'Cant get users articles',
        error: err
      })
    })
  }
  
}

module.exports = Article;