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
import com.inspectionapp.model.AssetType;

@Repository
@Transactional(readOnly = true)
public class AssetTypeDaoImp implements AssetTypeDao {

   @Autowired
   private SessionFactory sessionFactory;

   public String save(AssetType asset) {
      sessionFactory.getCurrentSession().save(asset);
      return asset.getAsset_Type_Id();
   }

   public AssetType get(String id) {
      return sessionFactory.getCurrentSession().get(AssetType.class, id);
   }

   public List<AssetType> list() {
      Session session = sessionFactory.getCurrentSession();
      CriteriaBuilder cb = session.getCriteriaBuilder();
      CriteriaQuery<AssetType> cq = cb.createQuery(AssetType.class);
      Root<AssetType> root = cq.from(AssetType.class);
      cq.select(root);
      Query<AssetType> query = session.createQuery(cq);
      return query.getResultList();
   }

   public void update(String asset_id, AssetType asset) {
      Session session = sessionFactory.getCurrentSession();
      AssetType asset2 = session.byId(AssetType.class).load(asset_id);
      asset2.setDescription(asset.getDescription());
      session.flush();
   }

   public void delete(String id) {
      Session session = sessionFactory.getCurrentSession();
      AssetType asset = session.byId(AssetType.class).load(id);
      session.delete(asset);
   }

}
