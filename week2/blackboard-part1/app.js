const db = require('./database/setup'); // Do not edit/remove this line

//Display 
function displayAllArticles() {
	db.find().then(data => {
		console.log(data);
	  });
}

//Display by name
function displayArticleByName(articleName) {
	db.findOne({"name": articleName })
 .then(data => {
   console.log(data);
 });
}

//te
function displayArticleByID(articleId) {
	db.findById(articleId)
 .then(data => {
   console.log(data);
 });
}

//displayArticleByID('625ea9ca38d6a3776994651f');

//test
function updateArticlePrice(articleId, newPrice) {
	db.updateOne({ "_id": articleId },{"price":newPrice})
 
 ;
}

//updateArticleStock
function updateArticleStock(articleId, newStock) {
	db.updateOne({ "_id": articleId },{"stock": newStock})
}

//test
function resetStocks() {
	db.updateMany({{}, "stock": 0 })
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