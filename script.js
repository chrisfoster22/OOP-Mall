// I want to build a mall.
// I want to have multiple stores and different types of store.
// I want to have different types of patrons.
// I want stores to carry different products.
// As a mall owner, I want to track the most popular stores by number of patrons visited that day.

// Store
// Patron
// Product
// Mall

function Mall(name) {
	this.name = name;
	this.stores = [];
	this.openingTime = "10:30";
	this.closingTime = "9:00";
	this.addStore = function(store) {
		this.stores.push(store);
	}
	this.addStores = function(storesArray) {
		this.stores = this.stores.concat(storesArray);
	};
	// this.mostPopularStore = function() {
	// 	var mostPopular = "";
	// 	for (var i = 0; i < stores.length; i++) {
	// 		if (stores[i].numberOfPatronsToday > stores[i-1].numberOfPatronsToday) {
	// 			mostPopular = stores[i].name;
	// 		}
	// 	}
	// 	return mostPoplar;
	// }
}

function Store(name) {
	this.name = name;
	this.products = [];
	this.addProduct = function(product) {
		this.products.push(product);
	}
	this.numberOfPatronsToday = 0;
	this.patronVisit = function() {
		this.numberOfPatronsToday += 1;
	}
}

function Product(name, price) {
	this.name = name;
	this.price = price;
}

function Patron(name, wallet) {
	this.name = name;
	this.wallet = wallet;
	this.storesVisited = [];
	this.visitStore = function(storeName) {
		this.storesVisited.push(storeName);
	}
}

function Employee(name, wallet, payRate, hoursThisWeek, placeOfEmployment) {
	this.payRate = payRate;
	this.hoursThisWeek = hoursThisWeek;
	this.placeOfEmployment = placeOfEmployment;
	Patron.apply(this, arguments);

}

var nycdaMall = new Mall("NYCDA Mall");

var macys = new Store("Macy's");
var hotTopic = new Store("Hot Topic");
var spencers = new Store("Spencer's Gifts");
var teavana = new Store("Teavana");

var myStores = [macys, hotTopic, spencers, teavana];


nycdaMall.addStores(myStores);

// nycdaMall.addStore(macys);
// nycdaMall.addStore(hotTopic);
// nycdaMall.addStore(spencers);
// nycdaMall.addStore(teavana);






