var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
const noteRoutes = require('./note_routes');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', man:'Dima' });
});

router.get('/new', function(req, res,){
  /**
   * Get data from DATABASE
   * THEN SEND THE DATA
   */
      res.send('Hello');
});


module.exports = router;
