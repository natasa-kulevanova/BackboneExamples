var app = app || {};

app.Router = Backbone.Router.extend({
    routes : {
    	"" : "showFirstPage",
    	"completedToDos" : "showCompletedToDos"
    },
    
    showFirstPage: function(){
    	$("#completedView").hide();
    	$("#subheader").show();
    	$("#allToDos").show();
    	$("#controls").show();
    },
    
    showCompletedToDos: function(){
    	$("#subheader").hide();
    	$("#allToDos").hide();
    	$("#controls").hide();
    	var allCompletedTodosView = new app.allCompletedTodosView({collection : toDoCollection});
    	$("#completedView").html(allCompletedTodosView.render().el);
    	$("#completedView").show();
    }
   
    
});