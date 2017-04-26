var app = app || {};

app.toDo = Backbone.Model.extend({

	defaults : {
		title : '',
		done : false
	},

	initialize: function(){
		this.on('change:done', function(){
			console.log("done has value: "+this.get('done'));
		});
	}

});