package com.seavus.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seavus.dao.ToDoDao;
import com.seavus.entities.Todo;

@Service
public class ToDoService {

	private ToDoDao toDoDao;

	@Autowired
	public ToDoService(ToDoDao toDoDao) {
		this.toDoDao = toDoDao;
	}

	public List<Todo> getAllToDos() {
		return this.toDoDao.getAllToDos();
	}

	public void saveItem(Todo todo) {
		this.toDoDao.saveTodo(todo);
	}

	public void updateTodo(Todo todo) {
		this.toDoDao.updateTodo(todo);
	}

	public void deleteTodo(Todo todo) {
		this.toDoDao.deleteTodo(todo);
	}

}
