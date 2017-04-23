var app = app || {};

app.todo = Backbone.Model.extend({

    defaults:{
       
    },
    
    initialize : function(){
        console.log("addNewToDo model is created.");
    }

});