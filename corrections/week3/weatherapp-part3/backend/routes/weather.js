var express = require('express');
var router = express.Router();

const City = require('../models/cities');

const owmApiKey = 'ce7418650c86eae6629dfcfdda141c14';

router.post('/', (req, res) => {
	// Check if the city has not already been added
	City.findOne({ cityName: req.body.cityName }).then(dbData => {
		if (dbData === null) {
			// Request OpenWeatherMap API for weather data
			fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.cityName}&appid=${owmApiKey}&units=metric`)
				.then(response => response.json())
				.then(apiData => {
					// Creates new document with weather data
					const newCity = new City({
						cityName: req.body.cityName,
						description: apiData.weather[0].description,
						tempMin: apiData.main.temp_min,
						tempMax: apiData.main.temp_max,
					});

					// Finally save in database
					newCity.save().then(newDoc => {
						res.json({ result: true, weather: newDoc });
					});
				});
		} else {
			// City already exists in database
			res.json({ result: false, error: 'City already saved' });
		}
	});
});

router.get('/', (req, res) => {
	City.find().then(data => {
		res.json({ weather: data });
	});
});

router.get('/:cityName', (req, res) => {
	City.findOne({ cityName: req.params.cityName }).then(data => {
		if (data) {
			res.json({ result: true, weather: data });
		} else {
			res.json({ result: false, error: 'City not found' });
		}
	});
});

router.delete('/:cityName', (req, res) => {
  City.deleteOne({ cityName: req.params.cityName }).then(deletedDoc => {
		if (deletedDoc.deletedCount >= 1) {
			City.find().then(data => {
				res.json({ result: true, weather: data });
			});
		} else {
			res.json({ result: false, error: 'City not found' });
		}
	});
});

module.exports = router;