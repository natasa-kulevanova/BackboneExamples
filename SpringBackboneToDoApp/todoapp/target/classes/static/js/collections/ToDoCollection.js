var app = app || {};

app.toDoCollection = Backbone.Collection.extend({
    
    model: app.toDo,
    url: 'http://localhost:8080/api/todos',
    
    initialize: function(){
        console.log("ToDo collection is created.");
    }

});
