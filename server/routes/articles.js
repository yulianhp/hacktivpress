var express = require('express');
var router = express.Router();
const Article = require('../controllers/article');

router.post('/', Article.createOne)
router.get('/', Article.getAll)
router.get('/user/:id', Article.getByUser)
router.get('/category/news', Article.getCatNews)
router.get('/category/reviews', Article.getCatReviews)
router.get('/detail/:id', Article.getOne)
router.put('/edit/:id', Article.editOne)
router.delete('/delete/:id', Article.deleteOne)

module.exports = router;
