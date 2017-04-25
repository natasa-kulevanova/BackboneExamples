var addNewToDoView = new app.addNewToDoView();
addNewToDoView.render();

var toDoCollection = new app.toDoCollection();
var allToDosView = new app.allToDosView({collection: toDoCollection});
var allCompletedTodosView;

var todosRouter = new app.Router();

Backbone.history.start();