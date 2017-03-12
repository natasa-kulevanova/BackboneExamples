package com.seavus.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Todo {

	@Id
	@GeneratedValue
	protected Long id;
	private String title;
	private boolean done;
	
	public Todo() {}

	public Todo(String title, boolean done) {
		this.title = title;
		this.done = done;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public boolean isDone() {
		return done;
	}

	public void setDone(boolean done) {
		this.done = done;
	}	
	
}
