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
import com.inspectionapp.model.MeasurementHistory;

@Repository
@Transactional(readOnly = true)
public class MeasurementHistoryDaoImp implements MeasurementHistoryDao {

	@Autowired
	private SessionFactory sessionFactory;

	public String save(MeasurementHistory asset) {
		sessionFactory.getCurrentSession().save(asset);
		return asset.getMeasurement_History_Id();
	}

	public MeasurementHistory get(String id) {
		return sessionFactory.getCurrentSession().get(MeasurementHistory.class, id);
	}

	public List<MeasurementHistory> list() {
		Session session = sessionFactory.getCurrentSession();
		CriteriaBuilder cb = session.getCriteriaBuilder();
		CriteriaQuery<MeasurementHistory> cq = cb.createQuery(MeasurementHistory.class);
		Root<MeasurementHistory> root = cq.from(MeasurementHistory.class);
		cq.select(root);
		Query<MeasurementHistory> query = session.createQuery(cq);
		return query.getResultList();
	}

	@SuppressWarnings("unchecked")
	public List<MeasurementHistory> listBySetId(String measurement_set_id) {
		Session session = sessionFactory.getCurrentSession();
		Query<MeasurementHistory> query = session.createQuery("from MeasurementHistory where Measurement_Set_Id = '"+measurement_set_id+"'");
		return query.getResultList();
	}

	public void update(String asset_id, MeasurementHistory asset) {
		Session session = sessionFactory.getCurrentSession();
		MeasurementHistory asset2 = session.byId(MeasurementHistory.class).load(asset_id);
		asset2.setInspection_Value(asset.getInspection_Value());
		session.flush();
	}

	public void delete(String id) {
		Session session = sessionFactory.getCurrentSession();
		MeasurementHistory asset = session.byId(MeasurementHistory.class).load(id);
		session.delete(asset);
	}

}
