var app = app || {};

app.toDo = Backbone.Model.extend({

	defaults : {
		title : '',
		done : false
	},

	initialize: function(){
		this.on('change', function(){
			console.log("The model has been changed.");
		});
		
		this.on('change:title', function(){
			console.log("The title has been changed.");
		});
	}

});