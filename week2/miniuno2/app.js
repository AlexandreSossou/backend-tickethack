
require('./models/connection');
const Play = require('./models/plays');



function playUno(cards, lastPlay) {
	
		for (let i =0; i < cards.length; i++){
			
				const newPlay = new Play({
					color : cards[i].color,
					number : cardsExample[i].number,
				});
				newPlay.save().then(newDoc => {
					console.log(newDoc);
				});
				
			for (let y = 0;y<cards.length;y++){
				if (cards[y].color === lastPlay.color || cards[y].number === lastPlay.number){
				const newPlay = new Play({
					color : cards[y].color,
					number : cardsExample[y].number,
				});
				newPlay.save().then(newDoc => {
					console.log(newDoc);
				});
				}
			}




		}
}

const cardsExample = [
	{ color: 'green', number: 6 },
	{ color: 'red', number: 6 },
	{ color: 'red', number: 9 },
	{ color: 'green', number: 9 },
	{ color: 'yellow', number: 9 },
];

const lastPlayExample = { color: 'blue', number: 6 };

playUno(cardsExample, lastPlayExample);

module.exports = playUno; // Do not edit/remove this line

