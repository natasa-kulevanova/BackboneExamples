var app = app || {};

app.allToDosView = Backbone.View.extend({

    tagName: "section",
    
    events: {
 
    },
    
    
    initialize: function(){
    	Backbone.on('updateToDos', this.updateView, this);
    	this.collection.bind("reset", _.bind(this.render, this));
        this.collection.fetch({
            reset: true
        });
    },
                                        
    render: function(){
    	this.$el.empty();
        this.collection.each(this.addToDo, this);
        $("#allToDos").html(this.el);
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