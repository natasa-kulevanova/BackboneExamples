var app = app || {};

app.addNewToDoView = Backbone.View.extend({

    el: '#addNewToDo',
    
    events: {
    	  "click #add_todo" : "createNewTodo"
    },
    
    template: _.template($("#addNewToDoTemplate").html()),
    
    initialize: function(){
        
    },
                                        
    render: function(){
        var addNewTodoTemplate = this.template();
        this.$el.html(addNewTodoTemplate);
        return this;
    },
    
    createNewTodo: function(){
    	var that = this;
    	var todoTitle = $("#new-todo").val();
    	$("#new-todo").val('');
    	toDoCollection.create({ title : todoTitle, done : false}, {
    		success: function(model, response){
    			Backbone.trigger('updateToDoCollection', that);
	    	}
    	});
    }

});