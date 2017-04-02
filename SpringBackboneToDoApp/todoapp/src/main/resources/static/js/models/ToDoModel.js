var app = app || {};

app.toDo = Backbone.Model.extend({

	defaults : {
		title : '',
		completed : false
	}

});