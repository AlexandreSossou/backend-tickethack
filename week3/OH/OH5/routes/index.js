var express = require('express');
var router = express.Router();

let a = ['Paris', 'Lisbonne', 'Bucarest'];

let c = [{objet: 'table', prix: 100},
  {objet: 'chaise', prix: 50},
  {objet: 'voiture', prix: 10}
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/a', function(req, res) {
  
  res.json({retour : a});
});

router.get('/c', function(req, res) {
  
  res.json({c});
});


router.put('/a/:position', (req, res) => {
  a[req.params.position] = req.body.d;
  console.log(req.params)
  console.log(req.body.d)
  res.json({ retour: a });
 });


router.put('/c/:position', (req, res) => {
  c[req.params.position] = req.body;
  console.log(req.params)
  console.log(req.body.d)
  res.json({ retour: c });
 });



router.post('/a', function(req, res){
  a.push(req.body.b);
  res.json({retour: a})
})

router.delete('/a/:position', function(req, res){
  a.splice(req.params.position,1);
  res.json({retour: a})
})

router.delete('/c/:position', function(req, res){
  c.splice(req.params.position,1);
  res.json({retour: c})
})




module.exports = router;
