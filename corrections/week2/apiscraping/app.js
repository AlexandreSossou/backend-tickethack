const fetch = require('node-fetch');
const db = require('./database/setup');
// Do not edit/remove code above this line

fetch('https://www.fruityvice.com/api/fruit/all')
	.then(res => res.json())
	.then(data => {
		data.forEach(fruit => {
			const newFruit = new db({
				name: fruit.name,
				family: fruit.family,
				carbohydrates: fruit.nutritions.carbohydrates,
				protein: fruit.nutritions.protein,
				fat: fruit.nutritions.fat,
				calories: fruit.nutritions.calories,
				sugar: fruit.nutritions.sugar,
			});

			newFruit.save().then(() => console.log(`${fruit.name} saved`));
		});
	});
