package com.seavus.dao;

import javax.annotation.PreDestroy;

import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.service.ServiceRegistry;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.seavus.entities.Todo;


@Configuration
public class HibernateConnection {
SessionFactory sessionFactory;
	
	@Bean
	public SessionFactory getConnection(){
		org.hibernate.cfg.Configuration configuration = new org.hibernate.cfg.Configuration();
		ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder()
				.applySettings(configuration.getProperties()).build();
		sessionFactory = configuration.addAnnotatedClass(Todo.class).buildSessionFactory(serviceRegistry);
		return sessionFactory;
	}
	
	@PreDestroy
	public void closeConnection(){
		sessionFactory.close();
	}
}
