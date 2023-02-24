
require('./models/connection');
const Play = require('./models/plays');



function playUno(cards, lastPlay) { // jeu de carte + carte sur le jeu
	
	let cardsToPlay=cards // jeu de carte
	//console.log(cardsToPlay)
	let a = []
	
			for (let y = 0;y<cards.length;y++){
				console.log(cardsToPlay[y])

				if (cardsToPlay[y].color === lastPlay.color || cardsToPlay[y].number === lastPlay.number){

				const newPlay = new Play({
					color : cards[y].color,
					number : cards[y].number,
				});
				newPlay.save();
				;
				

				
				//let b = JSON.stringify(cards);
				//console.log(cards[y])
				a.push(cards[y])
				console.log(`array a : ${a}`)
				cards[y]={}
				console.log(JSON.stringify(cards))
				//let b = JSON.stringify(cards);
				lastPlay = cards[y]



				// console.log(`lastPlay après la boucle ${y} : 
				// ${lastPlay} `)

				// console.log(`index : ${b}`)

				// cardsToPlay.splice(y,1)
 				// console.log(`lastPlay après la boucle ${y} : 
				// ${lastPlay} `)
				// console.log(`cardsToPlay après la boucle ${y} : 
				// ${cardsToPlay[y]} `)

				// let p = cards.indexOf(newPlay)
				// console.log("l'indice est : " + p)

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

