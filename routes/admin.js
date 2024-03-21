var express = require('express');
var router = express.Router();

/* GET users listing. */
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

  res.render('admin/view-product',{fruits,admin:true});
})

router.get('/add-product',function(req,res,next){
  res.render('admin/add-product',{admin:true});

})
router.post('/add-product',function(req,res,next){
  console.log(req.body);
  res.render('admin/add-product',{admin:true});
})

module.exports = router;
