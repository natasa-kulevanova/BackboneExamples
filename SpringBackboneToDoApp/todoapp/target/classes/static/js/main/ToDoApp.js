var addNewToDo = new app.addNewToDo();
var addNewToDoView = new app.addNewToDoView({model : addNewToDo});
$("#addNewToDo").html(addNewToDoView.render().el);
$("#addNewToDo").show();


var toDoCollection = new app.toDoCollection();
var allToDosView = new app.allToDosView({collection: toDoCollection});

var phonesRouter = new app.Router();

Backbone.history.start();