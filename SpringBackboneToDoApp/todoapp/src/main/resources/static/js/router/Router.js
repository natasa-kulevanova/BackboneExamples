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
    	var completedTodosCollection = new app.toDoCollection(toDoCollection.where({done: true}));
    	if(!allCompletedTodosView){
    		allCompletedTodosView = new app.allCompletedTodosView();
    	}
    	allCompletedTodosView.render(completedTodosCollection);
    	$("#completedView").show();
    }
   
    
});