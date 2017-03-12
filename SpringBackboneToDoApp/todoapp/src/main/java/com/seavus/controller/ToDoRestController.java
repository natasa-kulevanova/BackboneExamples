package com.seavus.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.seavus.entities.Todo;
import com.seavus.services.ToDoService;

@RestController
@RequestMapping("/api")
public class ToDoRestController {
	
	private ToDoService toDoService;
    
    @Autowired
    public ToDoRestController(ToDoService toDoService){
        this.toDoService = toDoService;
    }

    
    @RequestMapping(method = RequestMethod.GET, value="/todos")
	public List<Todo> getAllTodos(){
		return this.toDoService.getAllToDos();
	}
    
    @RequestMapping(method = RequestMethod.POST, value = "/item")
    public boolean saveTodo(@RequestBody Todo todo){
    	this.toDoService.saveItem(todo);
    	return true;
    }
    
    @RequestMapping(method = RequestMethod.PUT, value = "/item")
    public boolean updateTodo(@RequestBody Todo todo){
    	this.toDoService.updateTodo(todo);
    	return true;
    }
    
    @RequestMapping(method = RequestMethod.DELETE, value = "/item")
	public boolean deleteItem(@RequestBody Todo todo){
		this.toDoService.deleteTodo(todo);
		return true;
	}

}
