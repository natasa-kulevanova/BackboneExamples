var app = app || {};

app.allCompletedTodosView = Backbone.View.extend({

    el: '#completedView',
    
    template: _.template($('#completedToDosTmpl').html()),
    
    initialize: function(){
    	this.collection.on("reset", this.postRender, this);
    },
                                        
    render: function(todoCollection){
    	if(this.collection.models.length == 0){
    		this.collection.fetch({
    			reset: true
    		});
    	} else {
    		this.postRender();
    	}
        return this;
    },
    
    postRender: function(){
    	this.filterCollection();
    	this.$el.html('');
    	this.$el.html(this.template({
    	    collection: this.collection.toJSON()
    	}));
    },
    
    filterCollection : function(){
    	this.collection = new app.toDoCollection(toDoCollection.where({done: true}));
    }
    
})