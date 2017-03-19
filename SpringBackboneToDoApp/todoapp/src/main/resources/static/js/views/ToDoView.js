var app = app || {};

app.toDoView = Backbone.View.extend({

    tagName: "div",
    className: "toDoElement",
    
    events: {
    	"click #toDo" : "updateToDoState",
    	"click #delete_todo" : "deleteToDo"
    },
    
    template: _.template($("#toDoElement").html()),
    
    initialize: function(){
    
    },
                                        
    render: function(){
        var toDoTemplate = this.template(this.model.toJSON());
        this.$el.html(toDoTemplate);
        return this;
    },
    
    updateToDoState: function(){
    	var that = this;
        var todoItem = _.find(toDoCollection.models, function(item){
        		return item.id == that.model.id;
        });
        todoItem.set('done', !todoItem.get("done"));
        todoItem.save({},{
    		success: function(model, response){}
    	});
    },
    
    deleteToDo: function(){
    	var that = this;
    	todoItem = _.find(toDoCollection.models, function(item){
       		return item.id == that.model.id;
           });
    	todoItem.destroy({
    		contentType: 'application/json',
    		data: JSON.stringify(todoItem),
    		success: function(model, response){
				Backbone.trigger('updateToDos', this);
	    	}
    	});
    }

});