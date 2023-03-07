
// Test 1 : récupère un produit grâce à son ID : GET /products/byId/:id

// Test 2 : récupère tous les produits d'une marque : GET /products/byBrand/:brand

// Test 3 : récupère un produit selon son numéro de lot : GET /products/byBatchId/:id

var express = require('express');
var router = express.Router();




const a = require('../data')


console.log (a)


// router.get('/products/byId/:id', (req, res) => {
// 	City.find().then(data => {
// 		res.json({ weather: data });
// 	});
// });

// router.get("/products/byId/:id", (req, res) => {
//   City.findOne({
//     cityName: { $regex: new RegExp(req.params.cityName, "i") },
//   }).then(data => {
//     if (data) {
//       res.json({ result: true, weather: data });
//     } else {
//       res.json({ result: false, error: "City not found" });
//     }
//   });
// });