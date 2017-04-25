var app = app || {};

app.allCompletedTodosView = Backbone.View.extend({

    el: '#completedView',
    
    template: _.template($('#completedToDosTmpl').html()),
    
    initialize: function(){
    	
    },
                                        
    render: function(completedTodosCollection){
    	this.collection = completedTodosCollection;
    	this.$el.html('');
    	this.$el.html(this.template({
    	    collection: this.collection.toJSON()
    	}));
    	
        return this;
    },
    
})