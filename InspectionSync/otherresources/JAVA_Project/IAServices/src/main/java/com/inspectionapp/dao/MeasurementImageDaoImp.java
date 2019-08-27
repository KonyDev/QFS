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
import com.inspectionapp.model.MeasurementImage;

@Repository
@Transactional(readOnly = true)
public class MeasurementImageDaoImp implements MeasurementImageDao {

   @Autowired
   private SessionFactory sessionFactory;

   public String save(MeasurementImage asset) {
      sessionFactory.getCurrentSession().save(asset);
      return asset.getMeasurement_History_Id();
   }

   public MeasurementImage get(String id) {
      return sessionFactory.getCurrentSession().get(MeasurementImage.class, id);
   }
   
   public List<MeasurementImage> list() {
      Session session = sessionFactory.getCurrentSession();
      CriteriaBuilder cb = session.getCriteriaBuilder();
      CriteriaQuery<MeasurementImage> cq = cb.createQuery(MeasurementImage.class);
      Root<MeasurementImage> root = cq.from(MeasurementImage.class);
      cq.select(root);
      Query<MeasurementImage> query = session.createQuery(cq);
      return query.getResultList();
   }

   public void update(String asset_id, MeasurementImage asset) {
      Session session = sessionFactory.getCurrentSession();
      MeasurementImage asset2 = session.byId(MeasurementImage.class).load(asset_id);
      asset2.setMeasurement_History_Id(asset.getMeasurement_History_Id());
      session.flush();
   }

   public void delete(String id) {
      Session session = sessionFactory.getCurrentSession();
      MeasurementImage asset = session.byId(MeasurementImage.class).load(id);
      session.delete(asset);
   }

}
