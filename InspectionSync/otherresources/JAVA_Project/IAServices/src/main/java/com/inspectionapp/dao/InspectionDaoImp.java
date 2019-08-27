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

import com.inspectionapp.model.AssetHistory;
import com.inspectionapp.model.Inspection;
import com.inspectionapp.model.InspectionHistory;
import com.inspectionapp.model.MeasurementHistory;
import com.inspectionapp.model.MeasurementSetHistory;

@Repository
@Transactional(readOnly = true)
public class InspectionDaoImp implements InspectionDao {

	@Autowired
	private SessionFactory sessionFactory;

	public String save(Inspection inspection) {
		sessionFactory.getCurrentSession().save(inspection);
		String inspection_id ="Inspection0000";
		inspection_id=inspection_id.substring(0,14-inspection.getInspection_Id().length())+inspection.getInspection_Id();
		return inspection_id;
	}

	public Inspection get(String id) {
		return sessionFactory.getCurrentSession().get(Inspection.class, id);
	}

	public List<Inspection> list() {
		Session session = sessionFactory.getCurrentSession();
		CriteriaBuilder cb = session.getCriteriaBuilder();
		CriteriaQuery<Inspection> cq = cb.createQuery(Inspection.class);
		Root<Inspection> root = cq.from(Inspection.class);
		cq.select(root);
		Query<Inspection> query = session.createQuery(cq);
		List<Inspection> result= query.getResultList();
		return result;
	}

	public void update(String asset_id, Inspection asset) {
		Session session = sessionFactory.getCurrentSession();
		Inspection asset2 = session.byId(Inspection.class).load(asset_id);
		asset2.setInspectedBy(asset.getInspectedBy());
		asset2.setTimestamp(asset.getTimestamp());
		asset2.setSignature(asset.getSignature());
		asset2.setStatus(asset.getStatus());
		session.flush();
	}

	public void delete(String id) {
		Session session = sessionFactory.getCurrentSession();
		Inspection asset = session.byId(Inspection.class).load(id);
		session.delete(asset);
	}

	@SuppressWarnings("unchecked")
	public List<Inspection> assignedToInspections(String id) {
		Session session = sessionFactory.getCurrentSession();
		Query<Inspection> query = session.createQuery("from Inspection where assigned_To = '"+id+"'");
		List<Inspection> inspections=query.list();
		return inspections;
	}

	@SuppressWarnings("unchecked")
	public AssetHistory inspectionHistoryList(String asset_id) {
		Session session = sessionFactory.getCurrentSession();
		Query<Inspection> query = session.createQuery("from Inspection i where i.Asset_Id = '"+asset_id+"' AND i.status = 'Completed'");
		List<Inspection> inspections=query.list();

		AssetHistory assetHistory = new AssetHistory();
		Inspection firstInspection = new Inspection();
		try{
			if(inspections.size()>0)
			{
				firstInspection = inspections.get(0);
			}
			else
			{
				return new AssetHistory();
			}
		}
		catch (Exception e) {
			return new AssetHistory();
		}
		assetHistory.setAsset_Id(firstInspection.getAsset_Id());
		assetHistory.setAsset_Name(firstInspection.getAssets().getAssetTypes().getName());
		assetHistory.setAsset_Description(firstInspection.getAssets().getAsset_Description());

		List<InspectionHistory> inspectionHistoryList = new ArrayList<InspectionHistory>();

		for(Inspection inspection:inspections)
		{
			InspectionHistory inspectionHistory = new InspectionHistory();
			inspectionHistory.setAsset_Id(inspection.getAsset_Id());
			inspectionHistory.setAssigned_Timestamp(inspection.getAssigned_Timestamp());
			inspectionHistory.setAssigned_To(inspection.getAssigned_To());
			inspectionHistory.setInspectedBy(inspection.getInspectedBy());
			inspectionHistory.setInspection_Id(inspection.getInspection_Id());
			inspectionHistory.setSignature(inspection.getSignature());
			inspectionHistory.setStatus(inspection.getStatus());
			inspectionHistory.setTimestamp(inspection.getTimestamp());

			MeasurementSetHistory measurementSetHistory = new MeasurementSetHistory();

			List<MeasurementHistory> measurementHistoryList =  new ArrayList<MeasurementHistory>(inspection.getMeasurementHistories());
			MeasurementHistory measurementHistory = new MeasurementHistory();


			if(measurementHistoryList.size()>0)
			{
				measurementHistory = measurementHistoryList.get(0);
				measurementSetHistory.setMeasurement_Set_Id(measurementHistory.getMeasurement_Set_Id());
				measurementSetHistory.setMeasurementHistoryList(measurementHistoryList);
			}



			inspectionHistory.setMeasurementSetHistory(measurementSetHistory);
			inspectionHistoryList.add(inspectionHistory);
		}
		assetHistory.setInspectionHistoryList(inspectionHistoryList);

		return assetHistory;
	}


}
