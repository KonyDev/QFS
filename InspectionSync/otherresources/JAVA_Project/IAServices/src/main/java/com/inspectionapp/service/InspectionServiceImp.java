package com.inspectionapp.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.inspectionapp.dao.InspectionDao;
import com.inspectionapp.model.AssetHistory;
import com.inspectionapp.model.Inspection;
import com.inspectionapp.model.InspectionHistoryRecord;
import com.inspectionapp.model.InspectionMeasurement;
import com.inspectionapp.model.InspectionMeasurementMapping;
import com.inspectionapp.model.MeasurementHistoryRecord;

@Service
@Transactional(readOnly = true)
public class InspectionServiceImp implements InspectionService {

   @Autowired
   private InspectionDao inspectionDao;
   
   @Autowired
   private MeasurementHistoryService measurementHistoryService;
   
   @Autowired
   private InspectionMeasurementService inspectionMeasurementService;
   
   public String save(InspectionMeasurementMapping inspectionMeasurementMapping) {
	   
	   Inspection inspection = new Inspection();
	   inspection.setAsset_Id(inspectionMeasurementMapping.getAsset_Id());
	   inspection.setAssigned_Timestamp(inspectionMeasurementMapping.getAssigned_Timestamp());
	   inspection.setAssigned_To(inspectionMeasurementMapping.getAssigned_To());
	   inspection.setInspectedBy(inspectionMeasurementMapping.getInspectedBy());
	   inspection.setInspection_Id(inspectionMeasurementMapping.getInspection_Id());
	   inspection.setInspection_Images_Id("32");
	   inspection.setSignature(inspectionMeasurementMapping.getSignature());
	   inspection.setStatus(inspectionMeasurementMapping.getStatus());
	   inspection.setTimestamp(inspectionMeasurementMapping.getTimestamp());
	   
	   String inspection_id = inspectionDao.save(inspection);
	   
	   InspectionMeasurement inspectionMeasurement = new InspectionMeasurement();
	   inspectionMeasurement.setInspection_Id(inspection_id);
	   inspectionMeasurement.setMeasurement_Set_Id(inspectionMeasurementMapping.getMeasurement_Set_Id());
	   
	   inspectionMeasurementService.save(inspectionMeasurement);
	   
      return inspection_id;
   }

   public Inspection get(String id) {
      return inspectionDao.get(id);
   }

   public List<Inspection> list() {
      return inspectionDao.list();
   }

   
   public void update(String id, Inspection assetType) {
	   inspectionDao.update(id, assetType);
   }

   public void delete(String id) {
	   inspectionDao.delete(id);
   }

public AssetHistory inspectionHistoryList(String asset_id) {
	
	return inspectionDao.inspectionHistoryList(asset_id);
}

public String saveInspectionHistory(InspectionHistoryRecord inspectionHistoryRecord){
	
	Inspection inspection = new Inspection();
	inspection.setInspection_Id(inspectionHistoryRecord.getInspection_Id());
	inspection.setInspectedBy(inspectionHistoryRecord.getInspectedBy());
	inspection.setTimestamp(inspectionHistoryRecord.getTimestamp());
	inspection.setStatus(inspectionHistoryRecord.getStatus());
	inspection.setSignature(inspectionHistoryRecord.getSignature());
	this.update(inspectionHistoryRecord.getInspection_Id(),inspection);
	
	for(MeasurementHistoryRecord measurementHistoryRecord: inspectionHistoryRecord.getMeasurementHistroyRecord())
	{
		measurementHistoryService.save(measurementHistoryRecord);
	}
	
	return inspection.getInspection_Id();
}


public List<Inspection> assignedInspections(String id) {

	return inspectionDao.assignedToInspections(id);
}

}
