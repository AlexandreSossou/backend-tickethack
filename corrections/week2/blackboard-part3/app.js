require('./models/connection');
const Article = require('./models/articles');
const User = require('./models/users');
const Order = require('./models/orders');
const ervy = require('ervy')
const { bar, pie, bullet, donut, gauge, scatter } = ervy
const { bg, fg } = require('ervy')



/*
** Articles
*/

function displayAllArticles() {
	Article.find().then(data => {
		console.log('ARTICLES =>', data);
		let dataTable = []
		for (const e of data) {
			if (e.stock > 5) {
				dataTable.push({ key: e.name, value: e.stock, style: bg('blue'), height: 30 })
			} else {
				dataTable.push({ key: e.name, value: e.stock, style: bg('red'), height: 30 })
			}
		}
		console.log(bullet(dataTable))
	});

}
displayAllArticles()


function displayArticleByName(articleName) {
	Article.findOne({ name: articleName }).then(data => {
		console.log('ARTICLE =>', data);
	});
}

function displayArticleByID(articleId) {
	Article.finArticleyId(articleId).then(data => {
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
	User.deleteOne({ _id: userId }).then(() => {
		console.log(`User ${userId} deleted`);
	});
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
	Order.updateOne({ _id: orderId }, { paid: isPaid }).then(() => {
		console.log(`Order ${orderId} updated`);
	});
}

function deleteOrder(orderId) {
	Order.deleteOne({ _id: orderId }).then(() => {
		console.log(`Order ${orderId} deleted`);
	});
}



/*
** Query population
*/

function displayOrderArticles(orderId) {
	Order.findById(orderId)
		.populate('articles')
		.then(data => {
			console.log('ORDER =>', data);
		});
}

function displayUserOrders(userId) {
	Order.find({ user: userId }).then(data => {
		console.log('ORDERS =>', data);
	})
}

// Prepare data to render chart
const data = [
	{ key: 'D', value: 1, style: bg('red') },
	{ key: 'E', value: 5, style: bg('green') },
	{ key: 'F', value: 7, style: bg('blue'), padding: 1 },
	{ key: 'G', value: 0, style: bg('yellow') }
]

// Then use any chartType you like, for example:
//console.log(bar(data))


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
	displayOrderArticles,
	displayUserOrders,
};
