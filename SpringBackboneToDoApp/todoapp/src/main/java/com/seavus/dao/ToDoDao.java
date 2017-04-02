package com.seavus.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seavus.entities.Todo;

@Component
public class ToDoDao {

	private final static Logger logger = LoggerFactory.getLogger(ToDoDao.class);
    
	private SessionFactory sessionFactory;
	@Autowired
	public ToDoDao(SessionFactory sessionFactory){
		this.sessionFactory = sessionFactory;
	}
	
	@SuppressWarnings("unchecked")
	public List<Todo> getAllToDos(){
		Session session = sessionFactory.openSession();
		Transaction tx = null;
		List<Todo> results = null;
		try {
			tx = session.beginTransaction();
			String hql = "FROM Todo";
			Query query = session.createQuery(hql);
			results = query.list();
			tx.commit();
		} catch (RuntimeException e) {
			if (tx != null) {
                                logger.debug("Transaction rollback", e);
				tx.rollback();
			}
		} finally {
			session.close();
		}
		return results;
	}

	public void saveTodo(Todo todo) {
		System.out.println(todo.toString());
		Session session = sessionFactory.openSession();
		Transaction transaction = null;
		try {
			transaction = session.beginTransaction();
			Todo newTodo = new Todo(todo.getTitle(), todo.isDone());
			session.save(newTodo);
			transaction.commit();

		} catch (RuntimeException e) {
			if (transaction != null) {
                                logger.debug("Transaction rollback", e);
				transaction.rollback();
			}

		} finally {
			session.close();
		}
		
	}

	public void updateTodo(Todo todo) {
		Session session = sessionFactory.openSession();
		Transaction tx = null;
		List<Todo> results = null;
		try {
			tx = session.beginTransaction();
			Query query = session.createQuery("update Todo set done = :done" +
    				" where id = :id");
			query.setParameter("done", todo.isDone());
			query.setParameter("id", todo.getId());
			int result = query.executeUpdate();
			tx.commit();
		} catch (RuntimeException e) {
			if (tx != null) {
                                logger.debug("Transaction rollback", e);
				tx.rollback();
			}
		} finally {
			session.close();
		}
	}

	public void deleteTodo(Long id) {
		Session session = sessionFactory.openSession();
		Transaction transaction = null;
		try {
			transaction = session.beginTransaction();
			String hql = "DELETE FROM Todo WHERE id = :id";
			Query query = session.createQuery(hql);
			query.setParameter("id", id);
			query.executeUpdate();
			transaction.commit();
		} catch (RuntimeException e) {
			if (transaction != null) {
				transaction.rollback();
			}

		} finally {
			session.close();
		}
	}

}
