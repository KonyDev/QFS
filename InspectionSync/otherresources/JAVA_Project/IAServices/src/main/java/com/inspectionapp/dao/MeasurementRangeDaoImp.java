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
import com.inspectionapp.model.MeasurementRange;

@Repository
@Transactional(readOnly = true)
public class MeasurementRangeDaoImp implements MeasurementRangeDao {

   @Autowired
   private SessionFactory sessionFactory;

   public String save(MeasurementRange asset) {
      sessionFactory.getCurrentSession().save(asset);
      return asset.getMeasurement_Range_Id();
   }

   public MeasurementRange get(String id) {
      return sessionFactory.getCurrentSession().get(MeasurementRange.class, id);
   }

   public List<MeasurementRange> list() {
      Session session = sessionFactory.getCurrentSession();
      CriteriaBuilder cb = session.getCriteriaBuilder();
      CriteriaQuery<MeasurementRange> cq = cb.createQuery(MeasurementRange.class);
      Root<MeasurementRange> root = cq.from(MeasurementRange.class);
      cq.select(root);
      Query<MeasurementRange> query = session.createQuery(cq);
      return query.getResultList();
   }

   public void update(String asset_id, MeasurementRange asset) {
      Session session = sessionFactory.getCurrentSession();
      MeasurementRange asset2 = session.byId(MeasurementRange.class).load(asset_id);
      asset2.setValidate_Min_Max(asset.getValidate_Min_Max());
      session.flush();
   }

   public void delete(String id) {
      Session session = sessionFactory.getCurrentSession();
      MeasurementRange asset = session.byId(MeasurementRange.class).load(id);
      session.delete(asset);
   }

}
