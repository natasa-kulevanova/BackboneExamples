var app = app || {};

app.addNewToDoView = Backbone.View.extend({

    tagName: "div",
    className: "addNewTodo",
    
    events: {
    	  "click #add_todo" : "addNewToDo"
    },
    
    template: _.template($("#addNewToDoTemplate").html()),
    
    initialize: function(){
        
    },
                                        
    render: function(){
        var addNewTodoTemplate = this.template(this.model.toJSON());
        this.$el.html(addNewTodoTemplate);
        return this;
    },
    
    addNewToDo: function(){
    	var that = this;
    	var todoTitle = $("#new-todo").val();
    	$("#new-todo").val('');
    	toDoCollection.create({ title : todoTitle, done : false}, {
    		success: function(model, response){
    			Backbone.trigger('updateToDos', this);
	    	}
    	});
    }

});