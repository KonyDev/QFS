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
import com.inspectionapp.model.MeasurementSet;

@Repository
@Transactional(readOnly = true)
public class MeasurementSetDaoImp implements MeasurementSetDao {

   @Autowired
   private SessionFactory sessionFactory;

   public String save(MeasurementSet asset) {
      sessionFactory.getCurrentSession().save(asset);
      return asset.getMeasurement_Set_Id();
   }

   public MeasurementSet get(String id) {
      return sessionFactory.getCurrentSession().get(MeasurementSet.class, id);
   }

   public List<MeasurementSet> list() {
      Session session = sessionFactory.getCurrentSession();
      CriteriaBuilder cb = session.getCriteriaBuilder();
      CriteriaQuery<MeasurementSet> cq = cb.createQuery(MeasurementSet.class);
      Root<MeasurementSet> root = cq.from(MeasurementSet.class);
      cq.select(root);
      Query<MeasurementSet> query = session.createQuery(cq);
      return query.getResultList();
   }

   public void update(String asset_id, MeasurementSet asset) {
      Session session = sessionFactory.getCurrentSession();
      MeasurementSet asset2 = session.byId(MeasurementSet.class).load(asset_id);
      asset2.setDescription(asset.getDescription());
      session.flush();
   }

   public void delete(String id) {
      Session session = sessionFactory.getCurrentSession();
      MeasurementSet asset = session.byId(MeasurementSet.class).load(id);
      session.delete(asset);
   }


}
