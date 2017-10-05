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
				price: 300,
				active: false
			},
			{
				name: 'Design',
				price: 400,
				active: false
			},
			{
				name: 'Integration',
				price: 250,
				active: false
			},
			{
				name: 'Training',
				price: 220,
				active: false
			}
		]

	},

	methods: {

		toggleActive: function(s) {
			s.active = !s.active;
		},

		total: function() {
			var total = 0;

			return total;
		}

	}

});