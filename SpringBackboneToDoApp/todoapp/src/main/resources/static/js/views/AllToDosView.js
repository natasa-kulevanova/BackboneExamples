var app = app || {};

app.allToDosView = Backbone.View.extend({

    el: "#allToDos",
    
    events: {
 
    },
    
    initialize: function(){
    	Backbone.on('updateToDos', this.render, this);
    	this.collection.bind("reset", _.bind(this.render, this));
        this.collection.fetch({
            reset: true
        });
    },
                                        
    render: function(){
    	this.$el.html('');
        this.collection.each(this.addToDo, this);
        return this;
    },
    
      addToDo: function(toDo){
        var todoView =  new app.toDoView({ model: toDo });
        this.$el.append(todoView.render().el);
    },
    
    updateView: function(){
    	 this.collection.fetch({
             reset: true
         });
    }

});