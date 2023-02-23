const db = require('./database/setup'); // Do not edit/remove this line


function displayAllArticles() {
	db.find().then(data => {
		console.log(data);
	  });
}


function displayArticleByName(articleName) {
	db.findOne({"name": articleName })
 .then(data => {
   return data;
 });
}


function displayArticleByID(articleId) {
	db.findOne({ "_id": articleId })
 .then(data => {
   console.log(data);
 });
}

displayArticleByID('625ea9ca38d6a3776994651f');


function updateArticlePrice(articleId, newPrice) {
	db.updateOne({ "_id": articleId },{"price":newPrice})
 
 ;
}


function updateArticleStock(articleId, newStock) {
	db.updateOne({ "_id": articleId },{"stock":newStock})
}


function resetStocks() {
	
	db.updateMany({ stock: 0 })
}




// Do not edit/remove code under this line
module.exports = {
	displayAllArticles,
	displayArticleByName,
	displayArticleByID,
	updateArticlePrice,
	updateArticleStock,
	resetStocks,
};