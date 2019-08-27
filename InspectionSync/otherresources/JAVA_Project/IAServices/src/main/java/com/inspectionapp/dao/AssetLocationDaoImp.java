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

import com.inspectionapp.model.AssetLocation;

@Repository
@Transactional(readOnly = true)
public class AssetLocationDaoImp implements AssetLocationDao {

   @Autowired
   private SessionFactory sessionFactory;

   public String save(AssetLocation assetLocation) {
      sessionFactory.getCurrentSession().save(assetLocation);
      return assetLocation.getAsset_Location_Id();
   }

   public AssetLocation get(String id) {
      return sessionFactory.getCurrentSession().get(AssetLocation.class, id);
   }

   public List<AssetLocation> list() {
      Session session = sessionFactory.getCurrentSession();
      CriteriaBuilder cb = session.getCriteriaBuilder();
      CriteriaQuery<AssetLocation> cq = cb.createQuery(AssetLocation.class);
      Root<AssetLocation> root = cq.from(AssetLocation.class);
      cq.select(root);
      Query<AssetLocation> query = session.createQuery(cq);
      return query.getResultList();
   }

   public void update(String asset_location_id, AssetLocation assetLocation) {
      Session session = sessionFactory.getCurrentSession();
      AssetLocation assetLocation2 = session.byId(AssetLocation.class).load(asset_location_id);
      assetLocation2.setDescription(assetLocation.getDescription());
      session.flush();
   }

   public void delete(String id) {
      Session session = sessionFactory.getCurrentSession();
      AssetLocation asset = session.byId(AssetLocation.class).load(id);
      session.delete(asset);
   }

}
