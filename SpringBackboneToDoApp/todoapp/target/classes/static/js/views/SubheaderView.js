var app = app || {};

app.subheaderView = Backbone.View.extend({

    tagName: "div",
    className: "subheader",
    
    events: {
    	  "click #add_todo" : "addNewToDo"
    },
    
    template: _.template($("#subheaderTmpl").html()),
    
    initialize: function(){
        
    },
                                        
    render: function(){
        var subheaderTemplate = this.template(this.model.toJSON());
        this.$el.html(subheaderTemplate);
        return this;
    },
    
    addNewToDo: function(){
    	var that = this;
    	var todoTitle = $("#new-todo").val();
    	var todoItem = new app.toDo({ title : todoTitle, done : false});
    	todoItem.save({},{
    		success: function(model, response){
    			$("#new-todo").val('');
    			Backbone.trigger('updateToDos', this);
    		}
    	});
    },

});