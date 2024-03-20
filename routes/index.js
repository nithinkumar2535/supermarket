var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let fruits = [
    {
      name:"Apple",
      des:"Kashmir Apple",
      img :"images/apple.jfif",
      link:"View more"
    },
    {
      name:"Orange",
      des:"American Orange",
      img :"images/orange.jfif",
      link:"View more"
    },
    {
      name:"Papaya",
      des:"Kerala Papaya",
      img :"images/papaya.jfif",
      link:"View more"
    },
    {
      name:"Water Melon",
      des:"Arabian Water Melon",
      img :"images/watermelon.webp",
      link:"View more"
    }
  ]
  res.render('index', { fruits,admin:true });
});

module.exports = router;
