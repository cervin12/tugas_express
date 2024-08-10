var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req,res)=>{
  res.render('index', { title: 'Home', name: 'Cervin' });
});

router.get('/about',(req,res)=>{
  res.render('about', { title: 'About', name: 'Cervin' });
})

router.get('/contact',(req,res)=>{
  res.render('contact', { title: 'Contact', name: 'Cervin' });
})

module.exports = router;
