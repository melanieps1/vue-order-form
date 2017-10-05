// Define a custom filter called "currency".  It will reformat a number to be `$0.00`.

Vue.filter('currency', function(value) {
	// `toFixed(#)` gives it two decimal points
	return '$' + value.toFixed(2);
});

var demo = new Vue({

	el: '#main',

	data: {
		services: [
			{
				name: 'Web Development',
				price: 300
			},
			{
				name: 'Design',
				price: 400
			},
			{
				name: 'Integration',
				price: 250
			},
			{
				name: 'Training',
				price: 220
			}
		]

	},

	methods: {

		total: function() {
			var total = 0;

			return total;
		}

	}

});