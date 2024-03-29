var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let fruits = [
    {
      name:"Apple",
      des:"Kashmir Apple",
      img :"images/apple.jfif",
      link:"$200"
    },
    {
      name:"Orange",
      des:"American Orange",
      img :"images/orange.jfif",
      link:"$150"
    },
    {
      name:"Papaya",
      des:"Kerala Papaya",
      img :"images/papaya.jfif",
      link:"$100"
    },
    {
      name:"Water Melon",
      des:"Arabian Water Melon",
      img :"images/watermelon.webp",
      link:"$125"
    }
  ]
  res.render('index', { fruits,admin:false });
});

module.exports = router;
