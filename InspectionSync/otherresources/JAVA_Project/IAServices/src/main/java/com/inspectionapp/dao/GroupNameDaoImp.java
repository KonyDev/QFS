package com.inspectionapp.dao;

import java.util.ArrayList;
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
import com.inspectionapp.model.GroupName;

@Repository
@Transactional(readOnly = true)
public class GroupNameDaoImp implements GroupNameDao {

	@Autowired
	private SessionFactory sessionFactory;

	public String save(GroupName asset) {
		sessionFactory.getCurrentSession().save(asset);
		return asset.getGroup_Id();
	}

	public GroupName get(String id) {
		return sessionFactory.getCurrentSession().get(GroupName.class, id);
	}

	public List<GroupName> list() {
		Session session = sessionFactory.getCurrentSession();
		CriteriaBuilder cb = session.getCriteriaBuilder();
		CriteriaQuery<GroupName> cq = cb.createQuery(GroupName.class);
		Root<GroupName> root = cq.from(GroupName.class);
		cq.select(root);
		Query<GroupName> query = session.createQuery(cq);
		List<GroupName> result= query.getResultList();
		List<GroupName> finalresult= new ArrayList<GroupName>();
		for(GroupName as:result)
		{
			finalresult.add(as);
		}
		return finalresult;
	}

	public void update(String asset_id, GroupName asset) {
		Session session = sessionFactory.getCurrentSession();
		GroupName asset2 = session.byId(GroupName.class).load(asset_id);
		asset2.setDescription(asset.getDescription());
		session.flush();
	}

	public void delete(String id) {
		Session session = sessionFactory.getCurrentSession();
		GroupName asset = session.byId(GroupName.class).load(id);
		session.delete(asset);
	}

}
