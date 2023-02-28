var express = require('express');
var router = express.Router();

let trips = [{ departure: 'Paris', arrival: 'Lyon' }, { departure: 'Lyon', arrival: 'Marseille' }];

// POST /trips - Sample result: 
// "allTrips": [
//   {
//     "departure": "Paris",
//     "arrival": "Lyon"
//   },
//   {
//     "departure": "Lyon",
//     "arrival": "Marseille"
//   },
//   {"departure": "Grenoble",
//     "arrival": "Strasbourg"}
// ]

router.post('/trips', (req, res) => {
    trips.push(req.body);

    res.json({
        allTrips: trips})
   });



// GET /trips - Sample result:
// "allTrips": [
//   {
//     "departure": "Paris",
//     "arrival": "Lyon"
//   },
//   {
//     "departure": "Lyon",
//     "arrival": "Marseille"
//   },
//   {
//     "departure": "Grenoble",
//     "arrival": "Strasbourg"
//   }
// ]

router.get('/trips', (req, res) => {

    res.json({ allTrips: trips });
    console.log("get1")
   });

// GET /lastTrip - Sample result:
// "lastTrip": {
//   "departure": "Grenoble",
//   "arrival": "Strasbourg"
// }

router.get('/lastTrip', (req, res) => {

    res.json({ lastTrip: trips[trips.length-1] });
   
   });

// DELETE /trips - Sample result:
// "allTrips": []

router.delete('/trips', (req, res) => {
   
   
        trips.splice(req.params.position, trips.length);
        res.json({ allTrips: trips});
    
    
    
   });

module.exports = router;