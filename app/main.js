var demo = new Vue({

	el: '#main',

	data: {
		total: 0,
		services: Object.keys(serviceOptions),
		price: 0
	},

	methods: {

		// services( function loopOverKeys(key) {
		// 	console.log("key: ", key);
		// 	console.log("name: ", name);
		// 	console.log("price: ", price);
		// },

		getPrice: function(serviceOptions) {
			console.log('I hope this is working');
			price = this.serviceOptions.price;
			console.log(price);
		},

		getTotal: function(total, price) {
			console.log('Click to get total');
			total += this.price;
		}

	}

});