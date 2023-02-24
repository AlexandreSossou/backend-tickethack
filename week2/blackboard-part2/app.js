// Add your own requires here 😉
const connex = require('./models/connexion');
const order = require('./models/order');
const User = require('./models/user');
const Article = require('./models/article');


/*
** Articles
*/

function displayAllArticles() {
	Article.find().then(data => {
		console.log('ARTICLES =>', data);
	});
}

function displayArticleByName(articleName) {
	Article.findOne({ name: articleName }).then(data => {
		console.log('ARTICLE =>', data);
	});
}

function displayArticleByID(articleId) {
	Article.findById(articleId).then(data => {
		console.log('ARTICLE =>', data);
	});
}

function updateArticlePrice(articleId, newPrice) {
	Article.updateOne({ _id: articleId }, { price: newPrice }).then(() => {
		console.log(`Price updated for ${articleId}`);
	});
}

function updateArticleStock(articleId, newStock) {
	Article.updateOne({ _id: articleId }, { stock: newStock }).then(() => {
		console.log(`Stock updated for ${articleId}`);
	});
}

function resetStocks() {
	Article.updateMany({}, { stock: 0 }).then(() => {
		console.log(`Stocks successfully reset`);
	});
}


/*
** Users
*/

function displayAllUsers() {
	User.find().then(data => {
		console.log('USERS =>', data);
	});
}

function deleteUser(userId) { 
	
	User.deleteOne({ _id: userId });

}


/*
** Orders
*/

function displayAllOrders() { 
	Order.find().then(data => {
		console.log('ORDERS =>', data);
	});

}

function updateOrderPaymentStatus(orderId, isPaid) {
	Order.updateOne({ _id: orderId }, { paid: true }).then(() => {
		console.log(`Price updated for ${orderId}`);
	});
 }

function deleteOrder(orderId) { 
	Order.deleteOne({ _id: orderId });
}


// Do not edit/remove code under this line
module.exports = {
	displayAllArticles,
	displayArticleByName,
	displayArticleByID,
	updateArticlePrice,
	updateArticleStock,
	resetStocks,
	displayAllUsers,
	deleteUser,
	displayAllOrders,
	updateOrderPaymentStatus,
	deleteOrder,
};