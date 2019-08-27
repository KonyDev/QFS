package com.inspectionapp.service;

import java.util.List;

import com.inspectionapp.model.AssetHistory;
import com.inspectionapp.model.Inspection;
import com.inspectionapp.model.InspectionHistoryRecord;
import com.inspectionapp.model.InspectionMeasurementMapping;

public interface InspectionService {

	String save(InspectionMeasurementMapping assetType);
   Inspection get(String id);
   List<Inspection> list();
   List<Inspection> assignedInspections(String id);
   AssetHistory inspectionHistoryList(String asset_id);
   String saveInspectionHistory(InspectionHistoryRecord inspectionHistoryRecord);
   void update(String id, Inspection groupname);
   void delete(String id);
}
