var app = app || {};

app.completedTodoView = Backbone.View.extend({

	tagName: "div",
    
    template: _.template($("#completedToDoTmpl").html()),
    
    initialize: function(){
    
    },
                                        
    render: function(){
        var toDoCompletedTemplate = this.template(this.model.toJSON());
        this.$el.html(toDoCompletedTemplate);
        return this;
    }
  
});