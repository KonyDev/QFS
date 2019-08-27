package com.inspectionapp.dao;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.inspectionapp.model.InspectionUser;

@Repository
@Transactional(readOnly = true)
public class InspectionUserDaoImp implements InspectionUserDao {

	@Autowired
	private SessionFactory sessionFactory;

	public String save(InspectionUser inspection) {
		sessionFactory.getCurrentSession().save(inspection);
		return inspection.getUser_Id();
	}

	public InspectionUser get(String id) {
		return sessionFactory.getCurrentSession().get(InspectionUser.class, id);
	}

	public List<InspectionUser> list() {
		Session session = sessionFactory.getCurrentSession();
		CriteriaBuilder cb = session.getCriteriaBuilder();
		CriteriaQuery<InspectionUser> cq = cb.createQuery(InspectionUser.class);
		Root<InspectionUser> root = cq.from(InspectionUser.class);
		cq.select(root);
		Query<InspectionUser> query = session.createQuery(cq);
		List<InspectionUser> result= query.getResultList();
		return result;
	}

	public void update(String asset_id, InspectionUser asset) {
		Session session = sessionFactory.getCurrentSession();
		InspectionUser asset2 = session.byId(InspectionUser.class).load(asset_id);
		asset2.setFirstName(asset.getFirstName());
		session.flush();
	}

	public void delete(String id) {
		Session session = sessionFactory.getCurrentSession();
		InspectionUser asset = session.byId(InspectionUser.class).load(id);
		session.delete(asset);
	}

	@SuppressWarnings("unchecked")
	public InspectionUser getUserByEmailId(String id) {
		Session session = sessionFactory.getCurrentSession();
		Query<InspectionUser> query = session.createQuery("from InspectionUser where email = '"+id+"'");
		InspectionUser inspectionUser=null;
		try{
		inspectionUser=query.getSingleResult();
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return null;
		}
		return inspectionUser;
	}


}
