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

import com.inspectionapp.model.InspectionMeasurement;

@Repository
@Transactional(readOnly = true)
public class InspectionMeasurementDaoImp implements InspectionMeasurementDao {

   @Autowired
   private SessionFactory sessionFactory;

   public String save(InspectionMeasurement asset) {
      sessionFactory.getCurrentSession().save(asset);
      return asset.getInspection_Id();
   }

   public InspectionMeasurement get(String id) {
      return sessionFactory.getCurrentSession().get(InspectionMeasurement.class, id);
   }

   public List<InspectionMeasurement> list() {
      Session session = sessionFactory.getCurrentSession();
      CriteriaBuilder cb = session.getCriteriaBuilder();
      CriteriaQuery<InspectionMeasurement> cq = cb.createQuery(InspectionMeasurement.class);
      Root<InspectionMeasurement> root = cq.from(InspectionMeasurement.class);
      cq.select(root);
      Query<InspectionMeasurement> query = session.createQuery(cq);
      return query.getResultList();
   }

   public void update(String asset_id, InspectionMeasurement asset) {
      Session session = sessionFactory.getCurrentSession();
      InspectionMeasurement asset2 = session.byId(InspectionMeasurement.class).load(asset_id);
      asset2.setMeasurement_Set_Id(asset.getMeasurement_Set_Id());
      session.flush();
   }

   public void delete(String id) {
      Session session = sessionFactory.getCurrentSession();
      InspectionMeasurement asset = session.byId(InspectionMeasurement.class).load(id);
      session.delete(asset);
   }

}
