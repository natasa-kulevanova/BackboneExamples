var todoModel = new app.todo();
var addNewToDoView = new app.addNewToDoView({model : todoModel});
$("#addNewToDo").html(addNewToDoView.render().el);
$("#addNewToDo").show();


var toDoCollection = new app.toDoCollection();
var allToDosView = new app.allToDosView({collection: toDoCollection});
var allCompletedTodosView;

var todosRouter = new app.Router();

Backbone.history.start();