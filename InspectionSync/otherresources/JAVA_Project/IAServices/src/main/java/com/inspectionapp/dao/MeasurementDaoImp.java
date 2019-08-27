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
import com.inspectionapp.model.Measurement;

@Repository
@Transactional(readOnly = true)
public class MeasurementDaoImp implements MeasurementDao {

   @Autowired
   private SessionFactory sessionFactory;

   public String save(Measurement asset) {
      sessionFactory.getCurrentSession().save(asset);
      return asset.getMeasurement_Id();
   }

   public Measurement get(String id) {
      return sessionFactory.getCurrentSession().get(Measurement.class, id);
   }

   public List<Measurement> list() {
      Session session = sessionFactory.getCurrentSession();
      CriteriaBuilder cb = session.getCriteriaBuilder();
      CriteriaQuery<Measurement> cq = cb.createQuery(Measurement.class);
      Root<Measurement> root = cq.from(Measurement.class);
      cq.select(root);
      Query<Measurement> query = session.createQuery(cq);
      return query.getResultList();
   }

   public void update(String asset_id, Measurement asset) {
      Session session = sessionFactory.getCurrentSession();
      Measurement asset2 = session.byId(Measurement.class).load(asset_id);
      asset2.setDescription(asset.getDescription());
      session.flush();
   }

   public void delete(String id) {
      Session session = sessionFactory.getCurrentSession();
      Measurement asset = session.byId(Measurement.class).load(id);
      session.delete(asset);
   }


}
