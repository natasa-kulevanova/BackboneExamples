var app = app || {};

app.Router = Backbone.Router.extend({
    routes : {
    	"" : "showFirstPage",
    	"completedToDos" : "showCompletedToDos"
    },
    
    showFirstPage: function(){
    	$("#completedView").hide();
    	$("#addNewToDo").show();
    	$("#allToDos").show();
    	$("#controls").show();
    },
    
    showCompletedToDos: function(){
    	$("#addNewToDo").hide();
    	$("#allToDos").hide();
    	$("#controls").hide();
    	
    	if(!allCompletedTodosView){
    		allCompletedTodosView = new app.allCompletedTodosView({collection: toDoCollection});
    	}
    	allCompletedTodosView.render();
    	$("#completedView").show();
    }
    
});