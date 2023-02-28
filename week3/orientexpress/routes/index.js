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
//   {
   
//   }
// ]

router.post('/trips', (req, res) => {
    trips.push({"departure": "Grenoble",
    "arrival": "Strasbourg"});
    res.json({
        tripsList: trips})
        console.log("push")
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

    res.json({ tripsAll: trips[trips.length-1] });
    //console.log(trips[2])
    console.log("get1")
   });

// DELETE /trips - Sample result:
// "allTrips": []

router.delete('/trips/:position', (req, res) => {
    trips.splice(req.params.position, 1);
    res.json({ deleteTrip: trips });
   });

module.exports = router;