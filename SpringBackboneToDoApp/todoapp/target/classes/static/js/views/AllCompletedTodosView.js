var app = app || {};

app.allCompletedTodosView = Backbone.View.extend({

    tagName: "section",
    
    initialize: function(){
    	
    },
                                        
    render: function(){
    	this.collection.each(this.addToDo, this);
        $("#completedView").html(this.el);
        return this;
    },
    
    addToDo: function(toDo){
    	if(toDo.get('done')){
    		  var todoView =  new app.completedTodoView({ model: toDo });
    	      this.$el.append(todoView.render().el);
    	}
    },

    
})