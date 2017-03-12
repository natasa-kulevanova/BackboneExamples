var subheader = new app.subheader();
var subheaderView = new app.subheaderView({model : subheader});
$("#subheader").html(subheaderView.render().el);
$("#subheader").show();

var controls = new app.controls();
var controlsView = new app.controlsView({model : controls});
$("#controls").html(controlsView.render().el);
$("#controls").show();

var toDoCollection = new app.toDoCollection(data);
var allToDosView = new app.allToDosView({collection: toDoCollection});

var phonesRouter = new app.Router();

Backbone.history.start();