var demo = new Vue({

	el: '#main',

	data: {
		total: 0,
		serviceOptions: Object.keys(serviceOptions),
		price: 0
	},

	methods: {
		
		getPrice: function(serviceOptions) {
			price = this.serviceOptions.price;
		},

		getTotal: function(total, price) {
			total += this.price;
			
		}

	}

});