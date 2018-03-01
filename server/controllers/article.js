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
    article.find({author: req.params.id})
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
  
  static getCatNews(req,res){
    article.find({category: 'news'})
    .then(result => {
      res.status(200)
      .json({
        msg: 'List of articles in news category',
        articles: result
      })
    }).catch(err => {
      res.status(500)
      .json({
        msg: 'Cant get articles from news category',
        error: err
      })
    })
  }

  static getCatReviews(req,res){
    article.find({category: 'review'})
    .then(result => {
      res.status(200)
      .json({
        msg: 'List of articles in reviews category',
        articles: result
      })
    }).catch(err => {
      res.status(500)
      .json({
        msg: 'Cant get articles from reviews category',
        error: err
      })
    })
  }
  
  static getOne(req,res){
    article.findOne({'_id': req.params.id})
    .then(result => {
      res.status(200)
      .json({
        msg: 'Show detail',
        article: result
      })
    }).catch(err => {
      res.status(500)
      .json({
        msg: 'Cant get detail of article',
        error: err
      })
    })
  }
  
  static editOne(req,res){
    let input = {
      title: req.body.title,
      content: req.body.content,
      category: req.body.category
    }
    article.findOneAndUpdate({
      "_id": req.params.id
    },{
      $set:{
        "title": input.title,
        "content": input.content,
        "category": input.category
      }
    },{
      new: true
    }).then(result => {
      res.status(200)
      .json({
        msg: 'Article updated',
        article: result
      })
    }).catch(err => {
      res.status(500)
      .json({
        msg: 'Cant update article',
        error: err
      })
    })
  }
  
  static deleteOne(req,res){
    article.remove({"_id": req.params.id})
    .then(result => {
      res.status(200)
      .json({
        msg: 'Deleted',
        result: result
      })
    }).catch(err => {
      res.status(500)
      .json({
        msg: 'Cant delete article',
        error: err
      })
    })
  }
    
}

module.exports = Article;