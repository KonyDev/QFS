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
import com.inspectionapp.model.Media;

@Repository
@Transactional(readOnly = true)
public class MediaDaoImp implements MediaDao {

   @Autowired
   private SessionFactory sessionFactory;

   public String save(Media asset) {
      sessionFactory.getCurrentSession().save(asset);
      return asset.getmedia_id();
   }

   public Media get(String id) {
      return sessionFactory.getCurrentSession().get(Media.class, id);
   }

   public List<Media> list() {
      Session session = sessionFactory.getCurrentSession();
      CriteriaBuilder cb = session.getCriteriaBuilder();
      CriteriaQuery<Media> cq = cb.createQuery(Media.class);
      Root<Media> root = cq.from(Media.class);
      cq.select(root);
      Query<Media> query = session.createQuery(cq);
      return query.getResultList();
   }

   public void update(String asset_id, Media asset) {
      Session session = sessionFactory.getCurrentSession();
      Media asset2 = session.byId(Media.class).load(asset_id);
      asset2.setExtension(asset.getExtension());
      session.flush();
   }

   public void delete(String id) {
      Session session = sessionFactory.getCurrentSession();
      Media asset = session.byId(Media.class).load(id);
      session.delete(asset);
   }

}
