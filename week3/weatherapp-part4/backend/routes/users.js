var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');
const User = require('../models/users');






router.post('/signup', (req, res) => {
	// Check if the city has not already been added

User.findOne({name : { $regex: new RegExp(req.body.name, 'i') }})
.then(data=>{

    if ( req.body.name === null || req.body.name === ''){

        res.json({ result: false, error: 'Missing or empty fields' });

    }
    if (data ) {
        console.log(data)
        res.json({ result: false, error: 'User already exists' })

    }
    else{
        const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    
                });

                newUser.save().then(u => {
                    res.json({ result: true, b:u});
                    });
    }
})
});





// 	User.findOne({ cityName: { $regex: new RegExp(req.body.cityName, 'i') } }).then(dbData => {
// 		if (dbData === null) {
// 			// Request OpenWeatherMap API for weather data
// 			fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.cityName}&appid=${OWM_API_KEY}&units=metric`)
// 				.then(response => response.json())
// 				.then(apiData => {
// 					// Creates new document with weather data
// 					const newCity = new City({
// 						cityName: req.body.cityName,
// 						main: apiData.weather[0].main,
// 						description: apiData.weather[0].description,
// 						tempMin: apiData.main.temp_min,
// 						tempMax: apiData.main.temp_max,
// 					});

// 					// Finally save in database
// 					newCity.save().then(newDoc => {
// 						res.json({ result: true, weather: newDoc });
// 					});
// 				});
// 		} else {
// 			// City already exists in database
// 			res.json({ result: false, error: 'City already saved' });
// 		}
// 	});
// });



module.exports = router;
