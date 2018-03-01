var express = require('express');
var router = express.Router();
const Article = require('../controllers/article');

router.post('/', Article.createOne)
router.get('/', Article.getAll)


module.exports = router;
