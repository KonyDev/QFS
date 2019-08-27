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
import com.inspectionapp.model.Asset;

@Repository
@Transactional(readOnly = true)
public class AssetDaoImp implements AssetDao {

	@Autowired
	private SessionFactory sessionFactory;

	public String save(Asset asset) {
		sessionFactory.getCurrentSession().save(asset);
		return asset.getAsset_Id();
	}

	public Asset get(String id) {
		return sessionFactory.getCurrentSession().get(Asset.class, id);
	}

	public List<Asset> list() {
		Session session = sessionFactory.getCurrentSession();
		CriteriaBuilder cb = session.getCriteriaBuilder();
		CriteriaQuery<Asset> cq = cb.createQuery(Asset.class);
		Root<Asset> root = cq.from(Asset.class);
		cq.select(root);
		Query<Asset> query = session.createQuery(cq);
		List<Asset> result= query.getResultList();
		List<Asset> finalresult= new ArrayList<Asset>();
		for(Asset as:result)
		{
			finalresult.add(as);
		}
		return finalresult;
	}

	public void update(String asset_id, Asset asset) {
		Session session = sessionFactory.getCurrentSession();
		Asset asset2 = session.byId(Asset.class).load(asset_id);
		asset2.setAsset_Description(asset.getAsset_Description());
		asset2.setAsset_Location_Id(asset.getAsset_Location_Id());
		session.flush();
	}

	public void delete(String id) {
		Session session = sessionFactory.getCurrentSession();
		Asset asset = session.byId(Asset.class).load(id);
		session.delete(asset);
	}

	public List<Asset> getOnlyAsset() {
		Session session = sessionFactory.getCurrentSession();
		CriteriaBuilder cb = session.getCriteriaBuilder();
		CriteriaQuery<Asset> cq = cb.createQuery(Asset.class);
		Root<Asset> root = cq.from(Asset.class);
		cq.select(root);
		Query<Asset> query = session.createQuery(cq);
		List<Asset> assets=query.getResultList();
		List<Asset> assetsFilterd=new ArrayList<Asset>();
		for (Asset asset : assets) {
			Asset a= new Asset();
			a.setAsset_Id(asset.getAsset_Id());
			a.setAsset_Description(asset.getAsset_Description());
			a.setAsset_Type_Id(asset.getAsset_Type_Id());
			a.setAsset_Location_Id(asset.getAsset_Location_Id());
			a.setManufacture_Model_Nbr(asset.getManufacture_Model_Nbr());
			a.setManufacture_Part_Nbr(asset.getManufacture_Part_Nbr());
			a.setManufacture_Serial_Nbr(asset.getManufacture_Serial_Nbr());

			assetsFilterd.add(a);
		}
		return assetsFilterd;
	}

}
