var demo = new Vue({

	el: '#main',

	data: {
		total: 0,
		services: Object.keys(serviceOptions),
		price: 0
	},

	methods: {

		// getPrice: function(services) {
		// 	console.log('Why won\'t you work!?!');
		// 	price = this.serviceOptions.price
		// 	console.log(price);
		// },

		// getPrice: function(services) {
		// 	console.log('Why won\'t you work!?!');
		// 	price = this.serviceOptions.price;
		// 	console.log(price);
		// },

		getTotal: function(total, price) {
			console.log('Item added to cart');
			total += this.price;
		}

	}

});