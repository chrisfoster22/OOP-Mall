// I want to build a mall.
// I want to have multiple stores and different types of store.
// I want to have different types of patrons.
// I want stores to carry different products.

// Store
// Patron
// Product
// Mall

function Mall() {
	this.stores = [];
	this.openingTime = "10:30";
	this.closingTime = "9:00";
	this.addStore = function(store) {
		this.stores.push(store);
	}
}

function Store(name) {
	this.name = name;
	this.products = [];
	this.addProduct = function(product) {
		this.products.push(product);
	}
}

function Product() {

}

function Patron() {

}