var app = app || {};

app.toDo = Backbone.Model.extend({
	
	url: 'http://localhost:8080/api/item',

     defaults: {
        title: '',
        completed: false
     }

});