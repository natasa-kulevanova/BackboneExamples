var app = app || {};

app.controlsView = Backbone.View.extend({

    tagName: "div",
    
    template: _.template($("#completedTodos").html()),
    
    
    initialize: function(){
    	
    },
                                        
    render: function(){
    	var controlsTmpl = this.template(this.model.toJSON());
        this.$el.html(controlsTmpl);
        return this;
    },

});